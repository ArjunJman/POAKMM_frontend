import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'

import './embla.css'

const OPTIONS = { align: 'start', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function listSlider(){
return(
    <main className="sandbox">

    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>

  </main>
)
}
 
export default listSlider;


