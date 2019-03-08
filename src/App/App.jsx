import * as React from "react"
import ReactDOM from "react-dom"
import LoginPage from "./pages/LoginPage.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="row no-gutters justify-content-center"> 
          <div className="col">
              <LoginPage />
          </div>
        </div>
      </div>
    )
  }
}

export default App
