import React, { Component } from 'react';

export default class Country extends Component {
    constructor(props) {
        super(props);
        this.country = {
            id : 102,
            countryName : 'india'
        }
    }
    changeCountryname = () => {
        this.setCountry({
            countryName : 'us'
        })
    }
    render() {
        return (
            <div>
                {this.country.countryName}
                <button onClick={()=> this.changeCountryname()}> change country</button>
            </div>
        );
    }
}

