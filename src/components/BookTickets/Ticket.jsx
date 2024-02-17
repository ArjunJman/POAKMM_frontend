import * as React from "react";
import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import leftarrow from "../../assets/arrow.png";
import Seats from "./Seats";
import { useNavigate } from "react-router";

export const allTicketsContext = createContext();

const Ticket = ({ id, name, cat, date, loc, venue }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const ticketDetails = {
    id: 1,
    name: name,
    match_id: id,
    cat: cat,
    date: date,
    loc: loc,
    Venue: venue,
  };
  const [showTickets, setShowTickets] = useState(false);
  const [allTickets, setAllTickets] = useState([]);
  const navigate = useNavigate();

  var seats = [];
  for (var ticket in allTickets) {
    console.log("ticktick", allTickets[ticket]);
    seats.push({ id: allTickets[ticket]["seat_no"] });
  }

  console.log("seats", seats);

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("allTickets in confirm", allTickets);

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("myToken")}`,
      },
      body: JSON.stringify({ allTickets: allTickets }),
    };

    fetch("http://localhost:3000/api/newTicket", requestOptions) //enter allTickets post end point.
      .then((response) => response.json())
      .then((result) => {
        console.log("response", result);
        if (typeof result.message === "undefined" || result.message === "") {
          // Handle the case where message is undefined or an empty string.

          console.log("Seats Not Confirmed");
          alert("Seats Not Confirmed");
        } else {
          alert("Seats Booking successful");
          navigate("/homepage");
        }
      })
      .catch((error) => {
        alert("Please Select a Ticket");
        console.log("error", error);
      });
  };

  return (
    <allTicketsContext.Provider value={[allTickets, setAllTickets]}>
      <div>
        <div className="bg-[#DCCA87] flex flex-col justify-center items-center h-[29rem] rounded-3xl">
          <button
            className="bg-[#0C0C0C] text-slate-200 rounded h-[3rem] w-[7rem] mt-3 mb-3 shadow-lg hover:shadow-2xl font-semibold"
            onClick={() => setShowTickets(!showTickets)}
          >
            Book Tickets
          </button>
          {showTickets && (
            <div className="flex flex-col justify-center items-center">
              <Seats ticketDetails={ticketDetails} id={id} />
              <TriggerButton
                type="button"
                onClick={handleOpen}
                sx={{
                  backgroundColor: "#0C0C0C",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                Confirm Tickets!
              </TriggerButton>
            </div>
          )}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          slots={{ backdrop: StyledBackdrop }}
          sx={{ backgroundColor: "#545454" }}
        >
          <ModalContent
            sx={{
              width: 650,
              height: 480,
              padding: 3,
              backgroundColor: "#0C0C0C",
              color: "white",
            }}
          >
            <div className=" ">
              <a href={`/events/${id}`} className=" w-1 text-center">
                <img
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: "white" }}
                  src={leftarrow}
                  alt={leftarrow}
                />
              </a>
              <h2
                id="unstyled-modal-title"
                className="modal-title text-center text-2xl font-semibold font-mono "
              >
                Booking Summary
              </h2>
            </div>
            <hr />
            <h3 className="text-center font-semibold text-lg">
              {ticketDetails["name"]}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <p className="font-semibold">Category: {ticketDetails["cat"]}</p>
              <p className="font-semibold justify-self-end">
                Date: {ticketDetails["date"]}
              </p>
              <p className="font-semibold ">Location: {ticketDetails["loc"]}</p>
              <p className="font-semibold justify-self-end">
                Venue: {ticketDetails["Venue"]}
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <div>
                <p className="line-clamp-1 font-semibold">
                  Seat_No:{" "}
                  {Object.entries(seats).map((seat) => seat[1].id + " ")}
                </p>
                <p className="italic font-semibold">
                  {"( " + seats.length}{" "}
                  {seats.length > 1 ? "Tickets )" : "Ticket )"}
                </p>
              </div>
              <p className="font-semibold">RS.{seats.length * 100}</p>
            </div>
            <div className="flex justify-center">
              <a
                href="/eventDetails"
                className="text-center pt-2 font-semibold w-[12rem] h-10 bg-[#DCCA87] rounded text-[#0C0C0C] no-underline "
                onClick={(e) => handleBooking(e)}
              >
                Confirm Booking
              </a>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </allTicketsContext.Provider>
  );
};
export default Ticket;

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);
// &:hover {
//   background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//   border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
// }
