import React from 'react';
import ReactDOM from 'react-dom';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount() {
      try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);

          if(options){
              this.setState(() => ({options}));
          }
      }   catch (e) {
          
      }
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length){
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
      }
  }
  handleClearsModal = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  handleDeleteOptions = () => {
      this.setState(() => ({options: []}));
  };

  handleDeleteOption = (option) =>  {
      this.setState((prevState) => ({options: prevState.options.filter((el) => el != option)
      }));
  };

  handlePick = () => {
      const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
      this.setState(() => ({selectedOption: option}));
  };

  handleAddOption = (option) =>  {
      if(!option) {
          return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
          return "This option already exists";
      }

      this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };

  render() {
      const subtitle = "Put your life in the hands of a computer";

      return(
          <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action handlePick={this.handlePick} hasOptions={this.state.options.length}/>
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                        <OptionModal selectedOption={this.state.selectedOption} handleClearsModal={this.handleClearsModal} />
                    </div>
                </div>
          </div> 
      );
  }
}

IndecisionApp.defaultProps = {
  options: []
}