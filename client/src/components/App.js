import React from 'react';
import { ApolloProvider } from 'react-apollo';
import HomeContainer from '../containers/Home.container';
import AirportDetailsContainer from '../containers/AirportDetails.container';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import componentStyle from './App.style';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import withMediaquery from '../hoc/withMediaquery';

const Wrapper = styled.div`
    ${componentStyle}
`;
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'cache',
        errorPolicy: 'all',
    },
    query: {
        fetchPolicy: 'cache',
        errorPolicy: 'all',
    },
};

const client = new ApolloClient({
    cache,
    link,
    defaultOptions: defaultOptions,
});

const App = isDesktopOrLaptop => {
    console.log(isDesktopOrLaptop);
    return (
        <ApolloProvider client={client}>
            <Wrapper>
                <Container maxWidth="sm">
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path="/airport/:id" component={AirportDetailsContainer} />
                            <Route exact path="/" component={HomeContainer} />
                        </Switch>
                    </BrowserRouter>
                </Container>
            </Wrapper>
        </ApolloProvider>
    );
};

export default withMediaquery(App);
