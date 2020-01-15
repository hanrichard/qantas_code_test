import React from 'react';

const AirportItem = props => {
    return (
        <div>
            <span>
                <span>{props.airport.airportName}</span>
                <span>{props.airport.country.countryName}</span>
            </span>
        </div>
    );
};

export default AirportItem;
