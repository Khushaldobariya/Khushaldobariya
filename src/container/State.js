import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 101,
            stateName : 'Gujart'
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

