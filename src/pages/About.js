import React, { Component } from 'react'

import '../styles/About.scss'

import Heading from '../components/Heading'

export class About extends Component {
  render() {
    const { headingAlign } = this.props
    return (
      <div className='about-content'>
        <Heading text='About Me' align={headingAlign} />
        <div>
          <p className='info'>
            Hi, I'm Dane! I'm a Full Stack Web Developer living in San Diego, California. I got into the world of programming because of my desire to solve unique and complicated problems. I'm focused on making a user's experience pleasant and efficient.
          </p>
          <p className='info'>
            I have a deep appreciation for developer community and their passion to come together and help each other out. I strive to be a part of this community. I'm looking to work with motivated people to come up with innovative technology for the future. I'm always looking for a chance to increase my knowledge as well as an opportunity to display my current skills.
          </p>
          <p className='info'>
            With my free time I enjoy spending time at the beach, hiking, solving puzzles, playing video games and watching baseball. I also have a specialty for briefly trying out new hobbies.
          </p>
        </div>
      </div>
    )
  }
}

export default About
