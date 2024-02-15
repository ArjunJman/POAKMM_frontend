import React,{useState, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import imageByIndex from './imageByIndex '
import { Link } from 'react-router-dom'
import ImgMediaCard from './ImgMediaCard'
import './embla.css'


const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [matches, setMatches] = useState([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        var requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem('myToken')}`
          },
        };
        const response = await fetch('http://localhost:3000/api/fetchMatches',requestOptions); // Assuming your data is served at this endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();
        //console.log(data);
        setMatches(data);
        // console.log
        //console.log(matches)
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  return (
    <div className="embla">
      <h1 className='heading'>Upcoming Events</h1>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {matches.map((match,index) => (
            <div className="embla__slide" key={index}>     
              <Link to={`/events/${match.match_id}` }>
                <ImgMediaCard data={match}/>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default EmblaCarousel
