import React, { Component } from 'react'

import '../styles/NotFound.scss'

export class NotFound extends Component {
  render() {
    return (
      <div id='not-found-container'>
        {/* <h1>
          {
            '404'.split('').map((char, i) => (
              <span
                key={i}
                className='char'
                onMouseOver={(e) => this.props.bounceChar(e)}
              >
                {char}
              </span>
            ))
          }
        </h1> */}
        <div id='not-found-body'>
          The content you are looking for does not exist!
        </div>
      </div >
    )
  }
}

export default NotFound
