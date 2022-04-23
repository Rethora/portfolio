import React, { Component } from 'react'
import Heading from '../components/Heading'

import '../styles/NotFound.scss'

export class NotFound extends Component {
  render() {
    return (
      <div id='not-found-container'>
        <Heading
          text='404!'
        />
        <div
          id='not-found-body'
        >
          The content you are looking for does not exist!
        </div>
      </div >
    )
  }
}

export default NotFound
