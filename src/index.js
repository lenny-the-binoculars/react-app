import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader'
import App from './App/App.jsx'

WebFont.load({
  google: {
    families: ['Roboto:400,500', 'Material+Icons', 'sans-serif']
  }
})

const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    root,
  )
}
