import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from "react-helmet"
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Cards from './components/Cards'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './index.css'
import * as serviceWorker from './serviceWorker'

const App = () => <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Christina Voudouris: MERN Stack Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Philadelphia MERN Stack Developer highly skilled in full stack web development and responsive web design, with vanilla Javascript, React, Node, Express, MongoDB, WordPress, HTML, CSS, and SCSS / Sass." />
    <link rel="canonical" href="https://www.christinavoudouris.com" />
  </Helmet>
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={Home} />
    <Switch>
      <Route exact path='/services' component={Services} />
      <Route exact path='/projects' component={Projects} />
    </Switch>
    <Route exact path='/' component={Cards} />
    <Contact />
    <Footer />
  </BrowserRouter>
</>

render(<App />, document.getElementById('root'))
serviceWorker.unregister()
