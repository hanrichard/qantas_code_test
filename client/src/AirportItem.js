import React from 'react';
import { Link } from 'react-router-dom';

const AirportItem = props => {
    return (
        <div>
            <Link to={`/airport/${props.airport.airportCode}`}>
                <span>{props.airport.airportName}</span>
                <span>{props.airport.country.countryName}</span>
            </Link>
        </div>
    );
};

export default AirportItem;
