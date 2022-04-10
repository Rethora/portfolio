import React, { Component } from 'react'
import bitmoji from '../assets/bitmoji.png'

import '../styles/Home.scss'

import About from '../pages/About'
import Carousel from '../components/Carousel'
import Heading from '../components/Heading'
import Game from '../components/Game'

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
        <Game />
      </div>
    )
  }
}

export default Home
