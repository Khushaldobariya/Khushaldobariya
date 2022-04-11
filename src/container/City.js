import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : 121,
            cityName : 'surat'

        }
    }
    changeCityname () {
        this.setState ({
            cityName : 'Bharuch'
        })
    }
    render() {
        return (
            <div>
                {this.state.cityName}
              <button onClick={() => this.changeCityname ()}> change city</button>  
            </div>
        );
    }
}

export default City;