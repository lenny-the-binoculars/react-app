import * as React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        className="form-control"
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onChange}
        required
      />
    );
  }
}
export default Input;
