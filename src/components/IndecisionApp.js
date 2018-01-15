import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const decision = this.state.options[randomNum];
      this.setState(() => ({selectedOption: decision}))
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}))
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  };

  handleAddOption = (newOption) => {
    if (!newOption) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => (
      {options: prevState.options.concat(newOption)})
    )
  };

  handleClearSelectedOption = () => {
    if (this.state.selectedOption) {
      this.setState(() => ({selectedOption: undefined}))
    }
  };

  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      
    }
  };

  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  };

  componentWillUnmount () {
    console.log('componentWillUnmount')
  };

  render () {
    const subTitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>

        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
};

IndecisionApp.defaultProps = {
  options: []
};
