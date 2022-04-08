import React, { Component } from 'react'
import { work } from '../assets/card-contents'

import Card from '../components/Card'
import Heading from '../components/Heading'

export class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      work: work
    }
  }
  render() {
    const { work } = this.state
    const { headingAlign } = this.props
    return (
      <div className='cards-container'>
        <Heading text='My Previous Work' align={headingAlign} />
        <div className='card-container'>
          {
            work.map((val, index) => (
              <Card
                key={index}
                info={val}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Work
