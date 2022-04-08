import React, { Component } from 'react'
import { BsGithub } from 'react-icons/bs'

import '../styles/Card.scss'

export class Card extends Component {
  render() {
    const { img, title, items, link, github } = this.props.info
    return (
      <div className='card'>
        <h2 className='project-name'>{title}</h2>
        <div className='img-wrapper'>
          <a href={link} target='_blank' rel='noreferrer'>
            <img
              className='card-img'
              src={img}
              alt=''
            />
          </a>
        </div>
        <div className='card-footer'>
          {

            github ? <a
              href={github}
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub className='card-tech-item' />
            </a>
              : <div></div>
          }
          <div className='tech'>
            {
              items.map((t, i) => (
                <div className='card-tech-item' key={i}>{t}</div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Card
