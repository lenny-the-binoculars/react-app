import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App/App.jsx'

const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    root,
  )
}
