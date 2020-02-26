import React from 'react';
import Loader from '../components/Loader';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import AirportDetails from '../components/AirportDetails';

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

const AirportDetailsContainer = props => {
    const { loading, error, data } = useQuery(GET_AIRPORT_QUERY);

    if (loading) return <Loader />;

    if (error) return <div>{error.message}</div>;

    const airport = data.airports.find(airport => {
        return airport.airportCode === props.match.params.id;
    });

    return <AirportDetails airport={airport} />;
};

AirportDetailsContainer.propTypes = {
    match: PropTypes.string,
    airports: PropTypes.shape({
        airportCode: PropTypes.string,
        airportName: PropTypes.string,
        location: PropTypes.shape({
            longitude: PropTypes.string,
            latitude: PropTypes.string,
        }),
        city: PropTypes.shape({
            timeZoneName: PropTypes.string,
        }),
        country: PropTypes.shape({
            countryName: PropTypes.string,
        }),
    }),
};

export default AirportDetailsContainer;
