class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life into hands of a computer";
    const options =['Option 1','Option 2'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  };
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <h2>
          {this.props.subtitle}
        </h2>
      </div>
    );
  };
}
class Action extends React.Component {
  render() {
    return (<div>
      <button>What should i do?</button>
    </div>)
  };
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Here are your Options</p>
        {this.props.options.map(option => <Option key={option} option={option}/>)}
      </div>
    );
  };
}
class Option extends React.Component {
  render() {
    return (
        <div>{this.props.option}</div>
    );
  };
}
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="option"/>
        </form>
      </div>
    );
  };
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));