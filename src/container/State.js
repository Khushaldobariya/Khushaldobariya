import React, { Component } from 'react';
import City from './City';

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 101,
            stateName : 'Gujart'
         }
         {
             if (stateName = 'gujart') {
                 
             }
         }
        }
        changeStatename = () => {
            this.setState({
                stateName : 'Rajsthan'
            })
        }

    render() {
        return (
            <div> {this.state.stateName}
               <button onClick={() => this.changeStatename()}>change state </button>
            </div>
             )
         }
           
    }

