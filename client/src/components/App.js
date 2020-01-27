import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Header from './Header';
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

// import HomeContainer from '../containers/Home.container';
// import AirportDetailsContainer from '../containers/AirportDetails.container';
const AirportDetailsContainer = lazy(() => import('../containers/Home.container'));
const HomeContainer = lazy(() => import('../containers/Home.container'));

const App = isDesktopOrLaptop => {
    console.log(isDesktopOrLaptop);
    return (
        <ApolloProvider client={client}>
            <Wrapper>
                <Container maxWidth="sm">
                    <BrowserRouter>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Header />
                            <Switch>
                                <Route path="/airport/:id" component={AirportDetailsContainer} />
                                <Route exact path="/" component={HomeContainer} />
                            </Switch>
                        </Suspense>
                    </BrowserRouter>
                </Container>
            </Wrapper>
        </ApolloProvider>
    );
};

export default withMediaquery(App);
