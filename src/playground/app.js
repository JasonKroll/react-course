class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: []
    }
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  handlePick () {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const decision = this.state.options[randomNum];
      console.log(decision);
  }

  handleDeleteOptions () {
    this.setState(() => ({options: []}))
  }

  handleDeleteOption (optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }

  handleAddOption (newOption) {
    if (!newOption) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => (
      {options: prevState.options.concat(newOption)})
    )
  }

  render () {
    const subTitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subTitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

const Action = (props) => {
  return (
    <button
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
    What should I do?
    </button>
  );
}

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}>
        Remove All
      </button>
      {props.options.length === 0 && <p>Please add an option to get started.</p>}  
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
      <Option />
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
      
    </div>
  )
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
    this.setState(() => ({ error }))
    
    if (!error) {
      e.target.elements.optionText.value = '';
    }
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