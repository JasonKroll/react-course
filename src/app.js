class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: []
    }
  }

  handlePick () {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const decision = this.state.options[randomNum];
      console.log(decision);
  }

  handleDeleteOptions () {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleAddOption (newOption) {
    if (!newOption) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(newOption)
      }
    })
  }

  render () {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <button
        disabled={!this.props.hasOptions}
        onClick={this.props.handlePick}
      >
      What should I do?
      </button>
    )
  }
}

class Options extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => <Option key={option} optionText={option} /> )}
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
      <p>{this.props.optionText}</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  constructor (props) {
    super(props);
    this.handleClickAddOption = this.handleClickAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleClickAddOption (e) {
    e.preventDefault();
    const optionText = e.target.elements.optionText.value.trim();
    const error = this.props.handleAddOption(optionText);
    this.setState(() => {
      return { error }
    })
    // if (optionText) {
    //   console.log(optionText);
      e.target.elements.optionText.value = '';
    // }
  }
  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleClickAddOption.bind(this)}>
          <input type="text" name="optionText" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));