import React, { useState } from 'react';
import AirportItem from './AirportItem';
import styled from 'styled-components';
import componentStyle from './Home.style';
import Pagination from 'react-js-pagination';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { pageShownNum, pageRangeDisplayed, currentPages, nextPages, totalNumber } from '../utility/utility';

const Wrapper = styled.div`
    ${componentStyle}
`;
const Home = ({ airports }) => {
    const [activePage, setActivePage] = useState(1);

    const airportsList =
        airports &&
        airports.slice(currentPages(activePage), nextPages(activePage)).map(airport => {
            return <AirportItem key={airport.airportCode} airport={airport} />;
        });

    return (
        <Wrapper>
            {airports && airports.length > 0 ? (
                <React.Fragment>
                    <div className="AirportList__list">{airportsList}</div>
                    <div className="AirportList__pagination">
                        <Container maxWidth="sm">
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={pageShownNum}
                                totalItemsCount={totalNumber(airports) - pageShownNum}
                                pageRangeDisplayed={pageRangeDisplayed}
                                onChange={activePage => setActivePage(activePage)}
                            />
                        </Container>
                    </div>
                </React.Fragment>
            ) : (
                <Typography variant="h4" component="h1" gutterBottom>
                    No result
                </Typography>
            )}
        </Wrapper>
    );
};

Home.propTypes = {
    airports: PropTypes.array,
};

export default Home;
