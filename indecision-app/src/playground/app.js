class IndecisionApp extends React.Component {

// ========== FOR SELF REFERENCE ==========

//  ***constructor(props)***
//  If you want to use this.props in the constructor, 
//  you need to pass props to super. Otherwise, it 
//  doesn’t matter because React sets .props on the 
//  instance from the outside immediately after calling 
//  the constructor.

//  React sets this.props anyway after the constructor runs. 
//  Still, it is confusing to have this.props work in some 
//  places and not others. Especially if both constructor and 
//  other methods call some shared method that reads this.props. 
//  So, to avoid any potential confusion, we recommend always 
//  calling ***super(props)***.

// ========================================

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options:options}))
    }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat([option])}))
  } 
  render() {
    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}></Action>
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    {props.subtitle ? <h2>{props.subtitle}</h2> : undefined}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision"
}


const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
      disabled={!props.hasOptions}>
      What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((option) => (
        <Option 
        key={option} 
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}/>))
    }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>{props.optionText}
    <button 
    onClick={(e) => {
      props.handleDeleteOption(props.optionText);
    }}
    >
    Remove</button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => ({error: error}));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option" /> 
      <button>Submit</button>
      </form>
      </div>
    )
  }
}


// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age} </p>
//     </div>
//   )
// };


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));