class IndecisionApp extends React.Component {
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
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter Valid value to add item!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!';
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ options: prevState.options.filter(option => optionToRemove !== option) }));
  }
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life into hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick} />
        <Options options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  };
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.title}
      </h1>
      <h2>
        {props.subtitle}
      </h2>
    </div>
  );
}
const Action = (props) => {
  return (<div>
    <button disabled={!props.hasOptions}
      onClick={props.handlePick}>What should i do?</button>
  </div>)
};

const Options = (props) => {
  return (
    <div>
      {props.options.map(option => (
        <Option
          key={option}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
}
const Option = (props) => {
  return (
    <div>
      {props.option}
      <button onClick={(e) => {
        props.handleDeleteOption(props.option);
      }}>Remove</button>
    </div>
  );
}
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error: error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  };
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));