import React from 'react';
import AddOptions from './AddOption'
import Options from './Options'
import Header from './Header' 
import Action from './Action'
import OptionModel from './OptionModel'


class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleClearOption=this.handleClearOption.bind(this)
        this.state = {
          options :[],
          selectedOption : undefined
        }
    }
     componentDidMount(){
       try {  
           const json = localStorage.getItem('options')
         const options = JSON.parse(json)
        if(options){
         this.setState(() => ({ options }))
        }
    }
    catch (e){

    }
    }  
     componentDidUpdate(prevProps,prevState){
         if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json) 
        }
     }
     componentWillUnmount(){
         console.log("componentWillUnmount")
     }
    handleDeleteOptions(){
         this.setState(()=> ( { options : []}))
     }

    handleDeleteOption(optionToRemove){
       
       this.setState((prevState) => (
     {
         options : prevState.options.filter((option) => {
              return optionToRemove!==option; 
         })
     }            
    ))
    }   

    handlePick(){
        const random = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[random];
        this.setState(() => ({
               selectedOption : option
        }))
    }
    handleClearOption(){
        this.setState(() => ({
            selectedOption : undefined
     }))
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value'
        }
        else if (this.state.options.indexOf(option)>-1){
            return 'Option Already present'
        }
        this.setState((prevState) => ({ options : prevState.options.concat(option) }) )
    }

    render(){
        const subtitle = "Put your life in the hands of a computer ";
        return (
     <div>
     <Header 
      subtitle = {subtitle}/>
      <div className="container">
     <Action hasOption = {this.state.options.length>0}
        handlePick = {this.handlePick}
     />
     <div className="widget">
     <Options  options = {this.state.options} 
      handleDeleteOptions = {this.handleDeleteOptions}
      handleDeleteOption = {this.handleDeleteOption}
      />
     <AddOptions  handleAddOption ={this.handleAddOption}/>
     </div>
     <OptionModel 
     selectedOption = {this.state.selectedOption}
     handleClearOption={this.handleClearOption}
     />
     </div>
     </div>
      )
    }
}

export default IndecisionApp;