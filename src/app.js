class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
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
          Indecision
        </h1>
        <h2>
          Put your life into hands of a computer
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
        <p>Here are your options</p>
        <Option />
      </div>
    );
  };
}
class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option Component here</p>
      </div>
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