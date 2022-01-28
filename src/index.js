import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import UserContextProvider from '././context/UserContext/index.js';
import App from './App';
/*import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client"*/
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//new
const httpLink = createHttpLink({
  uri: "https://django-server-booking.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// old 
/*const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://django-server-booking.herokuapp.com/graphql",
  }),
})*/

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