import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }

  // constructor (props) {
  //   super(props);
    // this.handleClickAddOption = this.handleClickAddOption.bind(this);
    // this.state = {
    //   error: undefined
    // }
  // }

  handleClickAddOption = (e) => {
    e.preventDefault();
    console.log('testing');
    const optionText = e.target.elements.optionText.value.trim();
    const error = this.props.handleAddOption(optionText);
    this.setState(() => ({ error }))
    
    if (!error) {
      e.target.elements.optionText.value = '';
    }
    // }
  }
  render () {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleClickAddOption.bind(this)}>
          <input className="add-option__input" type="text" name="optionText" />
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}
