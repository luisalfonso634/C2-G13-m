import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import UserContextProvider from '././context/UserContext/index.js';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://django-server-booking.herokuapp.com/graphql",
  }),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);