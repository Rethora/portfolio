import React, { Component } from 'react'
import Card from '../components/Card'

import { certificates } from '../assets/card-contents'
import Heading from '../components/Heading'

export class Certs extends Component {
  render() {
    const { headingAlign } = this.props
    return (
      <div className='cards-container'>
        <Heading text='My Certifications' align={headingAlign} />
        <div className='card-container'>
          {
            certificates.map((val, i) => (
              <Card
                key={i}
                info={val}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Certs
