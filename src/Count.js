import React from 'react';
import { Component } from 'react';

export default class Count extends Component{
    constructor(props){
        super(props);
        this.state = {num:0,value:''};
    }

        add=()=> {
           let num =  this.state.num+1;
           this.setState({num});
           this.props.reviceSum(1);
      };

          min=()=>{
            let num =  this.state.num-1;
           this.setState({num});
           this.props.reviceSum(-1);
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