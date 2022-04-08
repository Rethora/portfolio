import React, { Component } from 'react'
import Particles from 'react-tsparticles'

import options from '../assets/particles.json'

export class Background extends Component {
  render() {
    return (
      <Particles
        id="background"
        options={options}
      />
    )
  }
}

export default Background
