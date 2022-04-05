import React, { Component } from 'react';

export default class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : 102,
            countryName : 'india'
        }
    }
    changeCountryname = () => {
        this.setState({
            countryName : 'us'
        })
    }
    render() {
        return (
            <div>
                {this.state.countryName}
                <button onClick={()=> this.changeCountryname()}> change country</button>
            </div>
        );
    }
}

