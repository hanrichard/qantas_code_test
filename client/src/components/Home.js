import React, { useState } from 'react';
import AirportItem from './AirportItem';
import styled from 'styled-components';
import componentStyle from './Home.style';
import Pagination from 'react-js-pagination';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { pageShownNum, pageRangeDisplayed, currentPages, nextPages, totalNumber } from '../utility/utility';

const Wrapper = styled.div`
    ${componentStyle}
`;
const Home = ({ airports }) => {
    const [activePage, setActivePage] = useState(1);

    const airportsList = airports.slice(currentPages(activePage), nextPages(activePage)).map(airport => {
        return <AirportItem key={airport.airportCode} airport={airport} />;
    });

    return (
        <Wrapper>
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
        </Wrapper>
    );
};

Home.propTypes = {
    airport: PropTypes.shape({
        airportName: PropTypes.string,
        airportCode: PropTypes.string,
        country: PropTypes.shape({
            countryName: PropTypes.string,
        }),
    }),
};

export default Home;
