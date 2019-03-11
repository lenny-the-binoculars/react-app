import * as React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Bookmarks from '@material-ui/icons/Bookmarks'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

import Navbar from './components/Navbar'
import MediaCard from './components/Card'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Roboto',
    ],
    fontSize: 12,
  },
  palette: {
    primary: blue,
  },
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Button variant="outlined" color="primary">
          <Bookmarks>Chapter 2</Bookmarks>
        </Button>
        <br />
        <TextField
          placeholder="Placeholder here"
          label="Basic TextField"
        />
        <MediaCard />
      </MuiThemeProvider>
    )
  }
}

export default App
