import React, { Component } from 'react'

import ContactForm from '../components/ContactForm'
import Heading from '../components/Heading'

export class Contact extends Component {
  render() {
    return (
      <>
        <Heading text="Let's Get In Contact" />
        <p
          className='info'
          id='contact-message'
        >
          I'm always looking for new opportunities! I am also always looking for new connections. Feel free to connect with me on Linkedin or use this form to send an email my way. Hope to be in touch soon!
        </p>
        <ContactForm />
      </>
    )
  }
}

export default Contact
