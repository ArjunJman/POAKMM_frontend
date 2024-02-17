import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Link } from "react-router-dom";
import ImgMediaCard from "./ImgMediaCard";
import "./embla.css";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#DCCA87",
            "--TextField-brandBorderFocusedColor": "#DCCA87",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

// embla carousel component to get the card sliders with previous and next buttons
const EmblaCarousel = (props) => {
  const outerTheme = useTheme();

  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // fetching the data from backend when the component loads
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        var requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("myToken")}`,
          },
        };
        const response = await fetch(
          "http://localhost:3000/api/fetchMatches",
          requestOptions
        ); // Assuming your data is served at this endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
        const data = await response.json();
        console.log('data',data)
        setMatches(data);
        setFilteredMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredResults = matches.filter((result) =>
      result.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log('filtered',filteredResults)
    setFilteredMatches(filteredResults);
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <div className="embla">
        <h1 className="heading">Upcoming Events</h1>
        <div className="flex justify-center mb-7">
            <div className="lg:w-[30rem] md:w-[25rem] w-[15rem]">
              <TextField
                margin="normal"
                required
                fullWidth
                id="search"
                label="Search"
                name="search"
                autoComplete="search"
                autoFocus
                sx={{
                  input: { color: "white" },
                  "& .MuiFormLabel-root": {
                    color: "#545454",
                  },
                }}
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {/* looping throuh all the evnets to get each event details */}
            {filteredMatches.map((match, index) => (
              <div className="embla__slide" key={index}>
                <Link to={`/events/${match.match_id}`}>
                  {/* getting each card component by passing the event details */}
                  <ImgMediaCard data={match} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          {/* previous and next button imported at the beginning::: logic written in another file */}
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EmblaCarousel;
