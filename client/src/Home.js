import React from 'react';
import Container from '@material-ui/core/Container';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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

    if (loading) return <div>loading...</div>;
    if (error) return <div>{error.message}</div>;

    console.log(data.airports);

    const airportsList = data.airports.map(airport => {
        return <div key={airport.airportCode}>{airport.airportCode}</div>;
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
