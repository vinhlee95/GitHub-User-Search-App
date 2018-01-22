import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';
 
import logo from './images/github.png';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store = {createStoreWithMiddleware(rootReducer)}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">GitHub Profile Search</h1>
          </header>
          <SearchForm />
          <SearchResults />
        </div>
      </Provider>
    );
  }
}

export default App;