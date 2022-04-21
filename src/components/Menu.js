import React, { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import { VscListFlat } from 'react-icons/vsc'

import '../styles/Menu.scss'

export class Menu extends Component {
  constructor(props) {
    super(props)
    this.menuRef = createRef()
    this.menuItemsRef = createRef()
    this.state = {
      lastYPos: 0,
      menuVisible: true,
      menuItemsVisible: false
    }
  }

  componentDidMount() {
    this.addMenuAnimation()
  }

  addMenuAnimation = () => {
    document.addEventListener('scroll', () => {
      const translationsArr = [...Array(101).keys()]
      const menu = this.menuRef.current
      const { lastYPos, menuVisible } = this.state
      const { scrollY } = window

      if (scrollY <= lastYPos) {
        if (!menuVisible) {
          [...translationsArr].reverse().forEach((num, i) => this.translateMenu(menu, num, i))
          this.setState({ menuVisible: true })
        }
      }
      else {
        if (menuVisible) {
          translationsArr.forEach((num, i) => this.translateMenu(menu, num, i))
          this.setState({ menuVisible: false })
        }
      }
      scrollY > 0 ? this.setState({ lastYPos: scrollY }) : this.setState({ lastYPos: 0 })
    })
  }

  translateMenu = (menu, num, wait) => {
    setTimeout(() => menu.style.transform = `translateY(-${num}%)`, 3 * wait)
  }

  showMenuItems = () => {
    if (!this.state.menuItemsVisible) {
      this.menuItemsRef.current.style.display = 'flex'
    } else {
      this.menuItemsRef.current.style.display = 'none'
    }
    this.setState({ menuItemsVisible: !this.state.menuItemsVisible })
  }

  handleClick = () => {
    if (this.state.menuItemsVisible) {
      this.menuItemsRef.current.style.display = 'none'
      this.setState({ menuItemsVisible: false })
    }
  }

  render() {
    return (
      <div
        id="menu"
        ref={this.menuRef}
      >
        <div
          className='menu-items'
        >
          <NavLink
            to='/'
            className='menu-item'
            onClick={this.handleClick}
          >
            LOGO
          </NavLink >
          <div
            id='menu-container'
          >
            <MenuItems
              handleClick={this.handleClick}
            />
          </div>
          <VscListFlat
            id='toggler'
            onClick={this.showMenuItems}
          />
        </div >
        <div
          id='toggle-menu-items'
          ref={this.menuItemsRef}
        >
          <MenuItems
            handleClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

class MenuItems extends Component {
  render() {
    return (
      <>
        <NavLink
          to='/'
          className='menu-item menu-link'
          onClick={() => this.props.handleClick()}
        >
          HOME
        </NavLink>
        <NavLink
          to='/certs'
          className='menu-item menu-link'
          onClick={() => this.props.handleClick()}
        >
          CERTS
        </NavLink>
        <NavLink
          to='/work'
          className='menu-item menu-link'
          onClick={() => this.props.handleClick()}
        >
          WORK
        </NavLink>
        <NavLink
          to='contact'
          className='menu-item menu-link'
          onClick={() => this.props.handleClick()}
        >
          CONTACT
        </NavLink>
      </>
    )
  }
}

export default Menu
