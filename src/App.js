import React, { Component } from 'react';
import BookList from './containers/book-list'
import BookDetail from './containers/book-detail';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';


const Store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={Store}>
       <BookList/><BookDetail/>
       </Provider>
      </div>
    );
  }
}

export default App;
