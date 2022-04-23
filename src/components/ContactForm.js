import React, { Component } from 'react'
import axios from 'axios'

import '../styles/ContactForm.scss'
import Modal from './Modal'

export class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.form = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    this.state = {
      form: this.form,
      show: false,
      modalMessage: ''
    }
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://formspree.io/f/mnqwzvoa', this.state.form)
      if (res.ok) {
        // success
        this.setState({ show: true, modalMessage: "Your message has been sent! We'll be in contact soon.", form: this.form })
      } else {
        // error
        this.setState({ show: true, modalMessage: "Oops... Something went wrong trying to send your message. Please try again" })
      }
    } catch (err) {
      // error
      this.setState({ show: true, modalMessage: "Oops... Something went wrong trying to send your message. Please try again" })
      console.error(err)
    }
  }

  closeModal = () => {
    this.setState({ show: false })
  }

  render() {
    const { form, show, modalMessage } = this.state
    return (
      <>
        <form
          id='contact-form'
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div
            className='form-input-container'
          >
            <div
              className='underline-animate'
            >
              <input
                required
                name='name'
                type='text'
                placeholder='Name'
                value={form.name}
                onChange={this.handleChange}
              />
            </div>
            <div
              className='underline-animate'
            >
              <input
                required
                name='email'
                type='email'
                placeholder='Email'
                value={form.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div
            className='form-input-container'
          >
            <div
              className='underline-animate'
            >
              <input
                required
                name='subject'
                type='text'
                placeholder='Subject'
                value={form.subject}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div
            className='form-input-container'
          >
            <div
              className='underline-animate message'
            >
              <textarea
                required
                name='message'
                placeholder='Message'
                value={form.message}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div
            className='form-input-container'
          >
            <input
              type='submit'
              value='SEND'
            />
          </div>
        </form>
        <Modal
          show={show}
          closeModal={this.closeModal}
          modalMessage={modalMessage}
        />
      </>
    )
  }
}

export default ContactForm
