import React from 'react';
import { render } from 'react-dom';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {text : ''};
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  // This method is to let React to control and manage the componet form.
  onChange(e) {
    // No need prevState in here. Use event to change
    this.setState({text: e.target.value});
  }

  // Control componet form version
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
         <input onChange={this.onChange} type="text" ref={(input) => this.input = input} value={this.state.text}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  // Uncontrol version
  /*
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
         <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  */
}
render(<NameForm />, document.getElementById('root'));
