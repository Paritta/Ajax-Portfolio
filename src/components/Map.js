import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'; 

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDMIfLS3rY9vQcI0eLyHCSmQ-YqQI2z5sc"

const Map = withGoogleMap(props => (
    <div>
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 35.17944, lng: 129.07556 }}
            // Pass the map reference here as props
            googleMapURL={googleMapURL}>
            <Marker
            position={{ lat: Number(props.lat), lng: Number(props.lng) }}/>
        </GoogleMap>
    </div>
));

export default Map
