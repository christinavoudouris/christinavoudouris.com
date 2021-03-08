import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './index.css'
import * as serviceWorker from './serviceWorker'
 
const App = () => <BrowserRouter>
  <Header />
  <Home/>
  <Cards />
  <Contact />
  <Footer />
</BrowserRouter>

render(<App />, document.getElementById('root'))
serviceWorker.unregister()
