import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import App from './App';
import Count from'./Count.js'

export default class CounterList extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[],
            counterNum:''
        };
    }

    handleChange=(event)=>{
        // console.log(this.state.counterNum);
        // this.setState({item:[]});
        // console.log(this.state.item);
        let item=[]
        for(var i=0;i<event.target.value;i++){
             item.push(<Count />);
        }
        this.setState({item});
    };
    

    render(){
        return(
            <div>
              <div>
                counterNum:
                <input type="text" value={this.state.counterNum}
                onChange={this.handleChange}
                />
               </div>
               <div>
               {this.state.item}
               </div>
            
            </div>
        );
    }
}
