import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import App from './App';

export default class Count extends Component{
    constructor(props){
        super(props);
        this.state = {num:0};
    }

        add=()=> {
           let num =  this.state.num+1;
           this.setState({num});
      };

          min=()=>{
            let num =  this.state.num-1;
           this.setState({num});
      };

      render(){
        return(
        <div>
            <button onClick={this.min}>-</button>
           <button>{this.state.num}</button>
           <button onClick={this.add}>+</button>
        </div>
        );
    };
}