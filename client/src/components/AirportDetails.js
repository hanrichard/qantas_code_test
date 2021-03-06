import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import componentStyle from './AirportDetails.style';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    ${componentStyle}
`;

const AirportDetails = ({ airport }) => {
    return (
        <Wrapper>
            <Card className="airportDetail__card">
                <CardContent>
                    {airport ? (
                        <React.Fragment>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Airport Name: {airport.airportName}
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Location
                            </Typography>
                            <ul>
                                <li>
                                    <Typography variant="body1" gutterBottom>
                                        latitude: {airport.location.latitude}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" gutterBottom>
                                        longitude: {airport.location.longitude}
                                    </Typography>
                                </li>
                            </ul>
                            <Typography variant="h5" component="h2" gutterBottom>
                                TimeZone
                            </Typography>

                            <ul>
                                <li>
                                    <Typography variant="body1">{airport.city.timeZoneName}</Typography>
                                </li>
                            </ul>
                        </React.Fragment>
                    ) : (
                        <Typography variant="h4" component="h1" gutterBottom>
                            No result
                        </Typography>
                    )}
                </CardContent>
            </Card>
            <Link className="airportDetail__button-wrap" to="/">
                <Button variant="contained" color="primary" size="large" className="airportDetail__button">
                    Back
                </Button>
            </Link>
        </Wrapper>
    );
};

AirportDetails.propTypes = {
    airportId: PropTypes.string,
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

export default AirportDetails;
