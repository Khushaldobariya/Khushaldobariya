import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
    console.log("1 constructor");
        this.state = {
            date : new Date() 
        }
    }
    tick = () => {
        this.setState ({date : new Date()});
          console.log("tick");
    } 

    componentDidMount = () => {
    console.log("3 componentDidMount");
   this.timerID = setInterval(() => this.tick(),1000);
}

componentDidUpdate = () => {
    console.log("componentDidUpdate");
}
    render() {
        console.log("2 render");
        return (
            
            <div >{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

