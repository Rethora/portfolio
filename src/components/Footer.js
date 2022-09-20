import React, { Component } from 'react'
import { SiCodewars, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

import '../styles/Footer.scss'

export class Footer extends Component {
  render() {
    return (
      <div
        id='footer'
      >
        <NavLink
          to='/contact'
        >
          <div className="media-link">
            <span>
              Email
            </span>
            <SiGmail
              className='media-icon'
            />
          </div>
        </NavLink>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/Rethora/'
        >
          <div className="media-link">
            <span>
              GitHub
            </span>
            <SiGithub
              className='media-icon'
            />
          </div>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/dane-roelofs/'
        >
          <div className='media-link'>
            <span>
              Linkedin
            </span>
            <SiLinkedin
              className='media-icon'
            />
          </div>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.codewars.com/users/Rethoracle'
        >
          <div className='media-link'>
            <span>
              CodeWars
            </span>
            <SiCodewars
              className='media-icon'
            />
          </div>
        </a>
      </div>
    )
  }
}

export default Footer
