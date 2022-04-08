import React, { Component } from 'react'
import { carouselItems } from '../assets/carousel-items'

import '../styles/Carousel.scss'

export class Carousel extends Component {
  render() {
    return (
      <div id='carousel'>
        {
          carouselItems.map((item, i) => (
            <div key={i} className='carousel-item'>
              {item}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Carousel
