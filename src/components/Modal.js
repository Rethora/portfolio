import React, { Component } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

import '../styles/Modal.scss'

export class Modal extends Component {

  // componentDidUpdate() {
  //   if (this.props.show) {
  //     document.getElementById('close-btn').focus()
  //   }
  // }

  render() {
    if (!this.props.show) {
      return null
    }
    else {
      return (
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                id='close-btn'
                tabIndex='0'
                onClick={() => this.props.closeModal()}
              >
                <IoCloseSharp
                  className='close-btn'
                />
              </button>
            </div>
            <div className="modal-body">
              {this.props.modalMessage}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Modal
