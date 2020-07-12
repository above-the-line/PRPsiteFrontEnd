import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/theme'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { AUTH_TOKEN } from './constants'

// Supporting HTML5 browsers only
import { BrowserRouter } from 'react-router-dom'

// create the httpLink that connects ApolloClient instance
// with the GraphQL API (GQL server running on http://localhost:4000)
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

// get token from localStorage if exists,
// return headers to context so httpLink can read them
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })



// instantiate ApolloClient by passing in the httpLink
// and a new instance of an InMemoryCache
// arr.concat creates a new array that includes values 
// from other arrays and additional items
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})



// Render the root component of your React app. 
// The App is wrapped with the higher-order component ApolloProvider
// that gets passed the client as a prop.
// Also wrapped with BrowserRouter so that all child components
// of App will get access to the routing functionality.
// The main job of a <Router> component is to create a history object
// to keep track of the location (URL). 
// When the location changes because of a navigation action, 
// the child component (in this case <App>) is re-rendered.
ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
