import React from 'react';
import ReactDOM from 'react-dom';

class LocationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    render() {
        return <div>Latitude: {this.state.lat}</div>

    }
}

ReactDOM.render(<LocationContainer />, document.querySelector('#root'));