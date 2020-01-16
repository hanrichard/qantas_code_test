import React from 'react';
import Loader from './Loader';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import AirportDetails from './AirportDetails';

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

    return <AirportDetails airports={data.airports} airportId={props.match.params.id} />;
};

AirportDetailsContainer.propTypes = {
    airport: PropTypes.shape({
        airportName: PropTypes.string,
        location: PropTypes.shape({
            longitude: PropTypes.string,
            latitude: PropTypes.string,
        }),
        city: PropTypes.shape({
            timeZoneName: PropTypes.string,
        }),
    }),
};

export default AirportDetailsContainer;
