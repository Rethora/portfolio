import React, { Component } from 'react'

import '../styles/Heading.scss'

export class Heading extends Component {

  bounceChar = (e) => {
    if (e.target.classList.contains('bounce-char') || e.target.innerHTML === ' ') return
    e.target.classList.add('bounce-char')
    setTimeout(() => e.target.classList.remove('bounce-char'), 700)
  }

  render() {
    const { text, align } = this.props
    return (
      <h1 className={align}>
        {
          text.split('').map((char, i) => (
            <span
              key={i}
              className='char'
              onMouseOver={(e) => this.bounceChar(e)}
            >
              {char}
            </span>
          ))
        }
      </h1>
    )
  }
}

export default Heading
