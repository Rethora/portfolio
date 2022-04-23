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
        <div
          className='header'
        >
          <About
            headingAlign='left'
          />
          <img
            src={bitmoji}
            className='bitmoji'
            alt='cat sleeping on laptop, preventing me to work'
          />
        </div>
        <Carousel />
        <div
          id='game-info-container'
        >
          <Game />
          <div
            id='portfolio-info'
          >
            <Heading
              align='left'
              text='Collectible Game'
            />
            <p
              className='info'
            >
              This is just a simple collectible game on a canvas element. It starts by generating a random position for the player and the collectible. While generating a new collectible location it will check that it is not within collectible range of the player. If it is, it will keep generating a new postion until it is not.
            </p>
            <p
              className='info'
            >
              Once the player and collectible postions are valid, it draws the canvas, and the images for the player and the collectible at their inital locations. Then it starts listening for keydown events. It checks that a player's next move is in range of the board and draws the new player's location on the next frame.
            </p>
            <p
              className='info'
            >
              Once a player is in collectible range, it updates their score and generates a new postion for the next collectible. Once a player has collected five items, it draws the winning message on the screen and cancels the frame animations.
            </p>
          </div>
        </div>
        <Heading
          align='left'
          text='Portfolio Information'
        />
        <p
          className='info'
        >
          I'm proud to announce that this entire portfolio was coded by hand from scratch using React and Sass. The only libraries that are used here are <a href='https://particles.js.org/' target='_blank' rel='noreferrer'>tsParticles</a> and <a href='https://react-icons.github.io/react-icons/' target='_blank' rel='noreferrer'>React Icons</a>. tsParticles was used for the background component and all the icons come from React Icons. Big thanks to Quinn Roelofs (my brother) for designing the logo that was used in the navigation bar and web browser tab. Alien png image used in the collectible game <a href='https://opengameart.org/content/alien-8' target='_blank' rel='noreferrer'>here</a>. Spaceship png image used in the collectible game <a href='https://opengameart.org/content/space-ship-0' target='_blank' rel='noreferrer'>here</a>. Check out the source code for this portfolio <a href='https://github.com/Rethora/portfolio' target='_blank' rel='noreferrer'>here</a>.
        </p>
      </div>
    )
  }
}

export default Home
