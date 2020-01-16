import React from 'react';
import Loader from './Loader';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import Home from './Home';

export const GET_AIRPORTS_QUERY = gql`
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

const HomeContainer = () => {
    const { loading, error, data } = useQuery(GET_AIRPORTS_QUERY);

    if (loading) return <Loader />;
    if (error) return <div>{error.message}</div>;

    return <Home airports={data.airports} />;
};

HomeContainer.propTypes = {
    airport: PropTypes.shape({
        airportName: PropTypes.string,
        airportCode: PropTypes.string,
        country: PropTypes.shape({
            countryName: PropTypes.string,
        }),
    }),
};

export default HomeContainer;
