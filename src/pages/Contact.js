import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Heading from '../components/Heading'

export class Contact extends Component {
  render() {
    return (
      <>
        {/* <h1>
          {
            'Contact Me'.split('').map((char, i) => (
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
        <Heading text="Let's Get In Contact" />
        <ContactForm />
      </>
    )
  }
}

export default Contact
