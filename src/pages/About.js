import React, { Component } from "react"

import "../styles/About.scss"

import Heading from "../components/Heading"

export class About extends Component {
  render() {
    const { headingAlign } = this.props
    return (
      <div className="about-content">
        <Heading text="About Me" align={headingAlign} />
        <div>
          <p className="info">
            Hi, I'm Dane! I'm a Full Stack Software Developer living in San
            Diego, California. I got into the world of programming because of my
            desire to solve unique and complicated problems with automation. I
            currently have {new Date().getFullYear() - 2019}+ years of
            development experience. On a daily basis, I work my full-time remote
            job while pursuing my BS in Computer Science. On top of that, I
            freelance and work on personal projects on the side. I like to keep
            myself busy and push myself because I love to do what I do and to
            ensure that I stay on top of my game. Very competitive out there 😅,
            I love it! I'm always looking for new opportunities to keep things
            fresh.
          </p>
          <p className="info">
            I strive to do my part in the development community. I have recently
            took on the task of providing help via stack overflow answers to my
            fellow programmers. I have a deep appreciation for the developer
            community and our passion to come together and help each other out.
            I'm looking to work with motivated people to come up with innovative
            technology for the future. I'm always looking for a chance to
            increase my knowledge as well as an opportunity to display my
            current skill set. I enjoy this life so much, I spend every day
            perfecting my current skills or learning something new whether that
            be a new language, technical skill, or even just a concept.
          </p>
          <p className="info">
            When I'm not coding, I enjoy working out, watching baseball, playing
            video games, watching movies, reading and hanging out with friends. I'm
            always looking to contribute to fun and exciting projects. I'm easy
            to get in touch with! Use the "Contact" form to directly send me an
            email or send me a LinkedIn connection request. Let's talk business!
          </p>
        </div>
      </div>
    )
  }
}

export default About
