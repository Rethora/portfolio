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
            Hi, I'm Dane! I'm a Full Stack Developer living in San Diego, California. I got into the world of programming because of my desire to solve unique and complicated problems. I've done it all, designing and coding web components, building well structured APIs, creating and using automated testing enviornments, quality assurance, integrating CI/CD pipelines, handling deployment processes and more. I'm always looking for new opportunities to keep things fresh.
          </p>
          <p className='info'>
            I have a deep appreciation for the developer community and our passion to come together and help each other out. I'm looking to work with motivated people to come up with innovative technology for the future. I'm always looking for a chance to increase my knowledge as well as an opportunity to display my current skill set. I enjoy technology so much I spend 7 days a week on a computer trying to learn something new.
          </p>
          <p className='info'>
            In my free time I enjoy working on side projects, learning new programming languages as well as tools to make the job easier, playing video games, watching baseball, going hiking, going to the gym, helping friends and family with projects.
          </p>
        </div>
      </div>
    )
  }
}

export default About
