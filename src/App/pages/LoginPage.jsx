import * as React from 'react'
import FormContainer from '../components/container/FormContainer.jsx'

class LoginPage extends React.Component {
  render() {
    return (
      <div id='login_form'>
        <FormContainer 
          form_label='Login' 
          form_inputs= {[
            {id: 'login_username', type: 'text', defaultValue: 'username'},
            {id: 'login_passowrd', type: 'password', defautalue: 'username'},
          ]}
        />
      </div>
    )
  }
}
export default LoginPage
