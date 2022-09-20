import React, { Component } from "react";
import bitmoji from "../assets/bitmoji.png";

import "../styles/Home.scss";

import About from "../pages/About";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import Game from "../components/Game";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <About headingAlign="left" />
          <img
            src={bitmoji}
            className="bitmoji"
            alt="cat sleeping on laptop, preventing me to work"
          />
        </div>
        <Carousel />
        <div id="game-info-container">
          <Game />
          <div id="portfolio-info">
            <Heading align="left" text="Portfolio Information" />
            <p className="info">
              I'm proud to announce that this entire portfolio was coded by hand
              from scratch using React and Sass. The only libraries that are
              used here are{" "}
              <a
                href="https://particles.js.org/"
                target="_blank"
                rel="noreferrer"
              >
                tsParticles
              </a>{" "}
              and{" "}
              <a
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
                rel="noreferrer"
              >
                React Icons
              </a>
              . tsParticles was used for the background component and all the
              icons come from React Icons. Big thanks to Quinn Roelofs (my
              brother) for designing the logo that was used in the navigation
              bar and web browser tab. Alien png image used in the collectible
              game{" "}
              <a
                href="https://opengameart.org/content/alien-8"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . Spaceship png image used in the collectible game{" "}
              <a
                href="https://opengameart.org/content/space-ship-0"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . Check out the source code for this portfolio{" "}
              <a
                href="https://github.com/Rethora/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <p className="info">
              I'm a huge fan of making changes to past projects where and when
              they're needed. If you find an issue with this site or have a
              suggestion for a new feature{" "}
              <a
                href="https://github.com/Rethora/portfolio/issues/new"
                target="_blank"
                rel="noreferrer"
              >
                open up a request
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
