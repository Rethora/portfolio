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

  async handleSubmit(e) {
    e.preventDefault()
    // try {
    //   const res = await axios.post('https://formspree.io/f/mnqwzvoa', this.state.form)
    //   if (res.ok) {
    //     // success
    //     this.setState({show: true, modalMessage: "Your message has been sent! We'll be in contact soon."})
    //   } else {
    //     // error
    //     this.setState({show: true, modalMessage: "Oops... Something went wrong trying to send your message. Please try again"})
    //   }
    // } catch (err) {
    //   // error
    //   this.setState({show: true, modalMessage: "Oops... Something went wrong trying to send your message. Please try again"})
    //   console.error(err)
    // }
    // test cool message sent animation here
    this.setState({
      show: true, modalMessage: "Your message has been sent! We'll be in contact soon.", form: this.form
    })
  }

  closeModal = () => {
    this.setState({ show: false })
  }

  render() {
    const { form, show, modalMessage } = this.state
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)} id='contact-form'>
          <div className='form-input-container'>
            <div className='underline-animate'>
              <input
                required
                type="text"
                placeholder='Name'
                value={form.name}
                onChange={(e) => this.setState(prev => ({
                  form: {
                    ...prev.form,
                    name: e.target.value
                  }
                }))}
              />
            </div>
            <div className="underline-animate">
              <input
                required
                type="email"
                placeholder='Email'
                value={form.email}
                onChange={(e) => this.setState(prev => ({
                  form: {
                    ...prev.form,
                    email: e.target.value
                  }
                }))}
              />
            </div>
          </div>
          <div className='form-input-container'>
            <div className="underline-animate">
              <input
                required
                type="text"
                placeholder='Subject'
                value={form.subject}
                onChange={(e) => this.setState(prev => ({
                  form: {
                    ...prev.form,
                    subject: e.target.value
                  }
                }))}
              />
            </div>
          </div>
          <div className="form-input-container">
            <div className="underline-animate message">
              <textarea
                required
                placeholder='Message'
                value={form.message}
                onChange={(e) => this.setState(prev => ({
                  form: {
                    ...prev.form,
                    message: e.target.value
                  }
                }))}
              />
            </div>
          </div>
          <div className="form-input-container">
            <input type='submit' value='SEND' />
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
