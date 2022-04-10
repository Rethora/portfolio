import React, { Component, createRef } from 'react'
import fighter from '../assets/game/fighter.png'
import alien from '../assets/game/alien.png'

import '../styles/Game.scss'

const canvasCalcs = {
  width: 800,
  height: 500,
  playerSize: 70,
  collectibleSize: 50,
  title: 50,
  border: 2
}

export class Game extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = createRef()
    this.player = {}
    this.collectible = {}
    this.animationFrameId = null
    this.state = {
      playerWon: false
    }
  }

  componentDidMount() {
    // initial setup of game
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext('2d')

    const [playerX, playerY] = this.getRandomXY(
      canvasCalcs.width,
      canvasCalcs.height,
      canvasCalcs.playerSize
    )
    const player = new Player(
      playerX,
      playerY,
      this.loadImage(fighter)
    )
    player.controls()
    this.player = player

    const [collectibleX, collectibleY] = this.getRandomXY(
      canvasCalcs.width,
      canvasCalcs.height,
      canvasCalcs.collectibleSize
    )
    const collectible = new Collectible(
      collectibleX,
      collectibleY,
      this.loadImage(alien)
    )
    this.collectible = collectible

    // rerenders the game until the player has won
    const render = () => {
      if (this.state.playerWon) return
      this.draw(ctx)
      this.animationFrameId = window.requestAnimationFrame(render)
    }
    render()
  }

  // when component is unmounted or when player has won cancel the frame animation
  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameId)
  }

  componentDidUpdate() {
    window.cancelAnimationFrame(this.animationFrameId)
  }

  // loads image source to a usuable html element to draw on canvas
  loadImage = src => {
    const img = new Image()
    img.src = src
    return img
  }

  // the frame to draw on the canvas when the player has collected the winning number of collectibles
  drawWonScreen = (ctx) => {
    ctx.clearRect(0, 0, canvasCalcs.width, canvasCalcs.height)
    this.drawHeader(ctx, 'WINNER!')
    ctx.fillStyle = '#FFF'
    ctx.textAlign = 'center'
    ctx.font = `20px 'Press Start 2P'`
    ctx.fillText(
      'Refresh the page to play again...',
      canvasCalcs.width / 2,
      canvasCalcs.height / 2
    )
  }

  // draws the header and underline border on the canvas with the given text
  drawHeader = (ctx, text) => {
    ctx.fillStyle = '#FFF'
    ctx.textAlign = 'center'
    ctx.font = `20px 'Press Start 2P'`
    ctx.fillText(
      text,
      canvasCalcs.width / 2,
      canvasCalcs.title / 2 + 10
    )
    ctx.fillStyle = '#08FDD8'
    ctx.fillRect(
      0,
      canvasCalcs.title,
      canvasCalcs.width,
      canvasCalcs.border
    )
  }

  // clears and redraws to the canvas on each frame
  // when an item is collected the score updates and the collectible moves to a new position
  // once a player has won the frame animation will stop
  draw = (ctx) => {
    ctx.clearRect(0, 0, canvasCalcs.width, canvasCalcs.height)
    this.drawHeader(ctx, `Collected: ${this.player.numCollected} / 5`)
    this.collectible.drawImg(ctx)
    this.player.drawImg(ctx)
    if (this.playerInRange(this.collectible.x, this.collectible.y)) {
      this.player.collected()
      if (this.player.won) {
        this.setState({ playerWon: true })
        this.drawWonScreen(ctx)
      } else {
        const [collectibleX, collectibleY] = this.getRandomXY(
          canvasCalcs.width,
          canvasCalcs.height,
          canvasCalcs.collectibleSize
        )
        this.collectible.x = collectibleX
        this.collectible.y = collectibleY
      }
    }
  }

  // checks if a player is in valid range of the collectible
  playerInRange = (collectibleX, collectibleY) => {
    const [pX, pY] = [this.player.x, this.player.y]
    const [cX, cY] = [collectibleX, collectibleY]
    const [pS, cS] = [canvasCalcs.playerSize, canvasCalcs.collectibleSize]

    const [playerX, playerY] = [pX + (pS / 2), pY + (pS / 2)]
    const [collX, collY] = [cX + (cS / 2), cY + (cS / 2)]

    const range = 30

    return playerX >= collX - range &&
      playerX <= collX + range &&
      playerY >= collY - range &&
      playerY <= collY + range
  }

  // gets random x and y to draw initial player position
  // gets new position for collectible outside of the player's collection range at their current position
  getRandomXY = (width, height, size) => {
    const getX = () => Math.floor(Math.random() * (width - size))
    const getY = () => Math.floor(Math.random() * (height - size - canvasCalcs.title)) + canvasCalcs.title

    let [x, y] = [getX(), getY()]
    while (this.playerInRange(x, y)) {
      [x, y] = [getX(), getY()]
    }

    return [x, y]
  }

  render() {
    return (
      <div id='game-container'>
        <p id='game-text'>Use WASD to move around!</p>
        <canvas
          id='game'
          ref={this.canvasRef}
          width={canvasCalcs.width}
          height={canvasCalcs.height}
        />
      </div>
    )
  }
}

class Player {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.img = img
    this.speed = 10
    this.numCollected = 0
    this.won = false
    this.keymap = {
      up: false,
      down: false,
      left: false,
      right: false
    }
  }

  drawImg(ctx) {
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      canvasCalcs.playerSize,
      canvasCalcs.playerSize
    )
  }

  collected() {
    this.numCollected++
    if (this.numCollected === 5) {
      this.won = true
    }
  }

  controls() {
    document.addEventListener('keydown', e => {
      const { key } = e
      if (key === 'w') {
        this.keymap.up = true
      }
      if (key === 's') {
        this.keymap.down = true
      }
      if (key === 'a') {
        this.keymap.left = true
      }
      if (key === 'd') {
        this.keymap.right = true
      }
      this.movePlayer()
    })
    document.addEventListener('keyup', e => {
      const { key } = e
      if (key === 'w') {
        this.keymap.up = false
      }
      if (key === 's') {
        this.keymap.down = false
      }
      if (key === 'a') {
        this.keymap.left = false
      }
      if (key === 'd') {
        this.keymap.right = false
      }
      this.movePlayer()
    })
  }

  movePlayer() {
    if (this.won) return
    Object.keys(this.keymap).forEach(dir => {
      if (this.keymap[dir]) {
        if (dir === 'up') {
          if (this.y - this.speed > canvasCalcs.title) {
            this.y -= this.speed
          } else {
            this.y = canvasCalcs.title
          }
        } else if (dir === 'down') {
          if (this.y + this.speed + canvasCalcs.playerSize < canvasCalcs.height) {
            this.y += this.speed
          } else {
            this.y = canvasCalcs.height - canvasCalcs.playerSize
          }
        } else if (dir === 'left') {
          if (this.x - this.speed > 0) {
            this.x -= this.speed
          } else {
            this.x = 0
          }
        } else if (dir === 'right') {
          if (this.x + this.speed + canvasCalcs.playerSize < canvasCalcs.width) {
            this.x += this.speed
          } else {
            this.x = canvasCalcs.width - canvasCalcs.playerSize
          }
        }
      }
    })
  }
}

class Collectible {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.img = img
  }

  drawImg(ctx) {
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      canvasCalcs.collectibleSize,
      canvasCalcs.collectibleSize
    )
  }
}

export default Game
