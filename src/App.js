import React, { Component } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';

import './styles/App.scss';

import Menu from './components/Menu'
import Home from './pages/Home'
import Certs from './pages/Certs'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Background from './components/Background'
import NotFound from './pages/NotFound'
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <HashRouter>
          <div className="content">
            <Menu />
            <Routes>
              <Route
                exact
                path='/'
                element={<Home />}
              />
              <Route
                path='/certs'
                element={<Certs />}
              />
              <Route
                exact
                path='/work'
                element={<Work />}
              />
              <Route
                exact
                path='/contact'
                element={<Contact />}
              />
              <Route
                exact
                path='*'
                element={<NotFound />}
              />
            </Routes>
            <Footer />
          </div>
        </HashRouter>
        <Background />
      </div>
    )
  }
}

export default App;
