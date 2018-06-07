import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
    state ={
        options: [],
        selectedOption: undefined
    };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=>({selectedOption:option}));
  }
  handleAddOption= (option) => {
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
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ options: prevState.options.filter(option => optionToRemove !== option) }));
  }
  clearSelectedOption = () => {
      this.setState(()=>({selectedOption: undefined}));
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
        <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
      </div>
    );
  };
}