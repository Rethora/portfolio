import React, { Component } from 'react'
import bitmoji from '../assets/bitmoji.png'

import '../styles/Home.scss'

import Filler from '../components/Filler'
import About from '../pages/About'
import Certs from '../pages/Certs'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import Carousel from '../components/Carousel'
import Heading from '../components/Heading'

export class Home extends Component {
  render() {
    return (
      <div>
        <Heading text='Portfolio In Progress...' />
        <div className='header'>
          <About headingAlign='left' />
          <img
            src={bitmoji}
            className='bitmoji'
            alt='cat sleeping on laptop, preventing me to work'
          />
        </div>
        <Carousel />
      </div>
    )
  }
}

export default Home
