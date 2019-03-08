import * as React from 'react'
import Input from '../presentational/Input.jsx'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      form_username: '',
      form_password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert('An input was submitted: ' + this.state.form_username + ',' + this.state.form_password)
  }

  composeInputs = () => {
    return this.props.form_inputs.map((input, index)=> 
        <Input key={index} id={input.id} type={input.type} value={input.value} onChange={this.onChange} />
    )
  }

  onChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  render() {
    return (
      <form id="form_container" onSubmit={this.handleSubmit}>
        <label id={this.props.form_label}>{this.props.form_label}</label>
        {this.composeInputs()}
      </form>
    )
  }
}
export default FormContainer
