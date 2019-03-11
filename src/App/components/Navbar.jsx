import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const NavBar = () => {
  return(
    <>
      <AppBar position="static">
        <Toolbar>
          React Material-UI example
        </Toolbar>
      </AppBar>
    </>
  )
}
export default NavBar
