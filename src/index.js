import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Cards from './components/Cards'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './index.css'
import * as serviceWorker from './serviceWorker'
 
const App = () => <BrowserRouter>
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

render(<App />, document.getElementById('root'))
serviceWorker.unregister()
