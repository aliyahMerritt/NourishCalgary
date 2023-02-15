import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Component } from "react";
import NCMapMarker from "../images/NCMarker.png"

export class NourishMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [{ latitude: 51.09349852152626, longitude: -114.1998117620616 },
            { latitude: 51.07225546180495, longitude: -114.07426688465753 },
            { latitude: 47.2052192687988, longitude: -121.988426208496 },
            { latitude: 47.6307081, longitude: -122.1434325 },
            { latitude: 47.3084488, longitude: -122.2140121 },
            { latitude: 47.5524695, longitude: -122.0425407 }]
        }
    }

    displayMarkers = () => {
        return this.state.locations.map((location, index) => {
            return <Marker
                icon={NCMapMarker}
                key={index}
                id={index}
                position={{
                    lat: location.latitude - 0.00053,
                    lng: location.longitude + 0.0001
                }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
                className="top-[2460px]"
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 51.09343113887743, lng: -114.1996937448698 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

const mapStyles = {
    width: '74%',
    height: '95%',
};

export default GoogleApiWrapper({
    apiKey: ''
})(NourishMap);
