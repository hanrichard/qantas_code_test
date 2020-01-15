import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Home from './Home';
import AirportDetails from './AirportDetails';
import Header from './Header';

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

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Header />
            <Container maxWidth="sm">
                <BrowserRouter>
                    <Switch>
                        <Route path="/airport/:id" component={AirportDetails} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </Container>
        </ApolloProvider>
    );
};

export default App;
