import React, { Component } from 'react'
// new--0.0 APp.js import route, switch, import nav, header footer. 
//import -0.1   home page, about page, 
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'

import Header from './Header'
import Footer from './Footer'

//new--0.1 - import home page, about page,  workout page. and not found
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import WorkoutsPage from './WorkoutsPage'
import NotFoundPage from './NotFoundPage'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>

        <header>
          <Header />
        </header>

        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/workouts' component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>

      </div>
    )
  }
}

