import React from 'react';
import { Component } from 'react';
import Count from'./Count.js'

export default class CounterList extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            counterNum:'',
            sum:0
        };
    }
    reviceSum=(item)=>{
        this.setState({sum:this.state.sum+item});
    }
    generateUUID = () => {
        /*jshint bitwise:false */
        var i,
          random;
        var uuid = '';
    
        for (i = 0; i < 32; i++) {
          random = Math.random() * 16 | 0;
          if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
          }
          uuid += (i === 12
            ? 4
            : (i === 16
              ? (random & 3 | 8)
              : random)).toString(16);
        }
        return uuid;
      }

    handleChange=(event)=>{
        // console.log(this.state.counterNum);
        // this.setState({item:[]});
        // console.log(this.state.item);
        let tempItem=[];
        for(let i=0;i<event.target.value;i++){
            tempItem.push(<Count key={this.generateUUID()} reviceSum={this.reviceSum}/>);
        }
        console.log(tempItem);
        this.setState({items:tempItem});
        this.setState({sum:0});
        this.setState({counterNum:event.target.value});
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
               {this.state.items}
               </div>
               <div>Sum={this.state.sum}</div>
            
            </div>
        );
    }
}
