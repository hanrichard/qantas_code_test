import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

export const GET_AIRPORT_QUERY = gql`
    {
        airports {
            airportCode
            airportName
            location {
                latitude
                longitude
            }
            city {
                timeZoneName
            }
            country {
                countryName
            }
        }
    }
`;

const AirportDetails = props => {
    const { loading, error, data } = useQuery(GET_AIRPORT_QUERY);

    if (loading) return <div>loading...</div>;

    if (error) return <div>{error.message}</div>;

    const airport = data.airports.filter(airport => {
        return airport.airportCode === props.match.params.id;
    })[0];

    return (
        <div>
            <div>Airport Name: {airport.airportName}</div>

            <Link to="/">Back</Link>
        </div>
    );
};

export default AirportDetails;
