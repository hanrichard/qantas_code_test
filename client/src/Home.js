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

    return (
        <div>
            <div>
                <Container maxWidth="sm">
                    <div className="AirportList__list">list</div>
                </Container>
            </div>
        </div>
    );
};

export default Home;
