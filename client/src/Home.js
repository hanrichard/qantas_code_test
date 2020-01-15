import React from 'react';
import Container from '@material-ui/core/Container';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import AirportItem from './AirportItem';
import Loader from './Loader';

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

const Home = () => {
    const { loading, error, data } = useQuery(GET_AIRPORTS_QUERY);

    if (loading) return <Loader />;
    if (error) return <div>{error.message}</div>;

    console.log(data.airports);

    const airportsList = data.airports.map(airport => {
        return <AirportItem key={airport.airportCode} airport={airport} />;
    });
    return (
        <div>
            <div>
                <Container maxWidth="sm">
                    <div className="AirportList__list">{airportsList}</div>
                </Container>
            </div>
        </div>
    );
};

export default Home;
