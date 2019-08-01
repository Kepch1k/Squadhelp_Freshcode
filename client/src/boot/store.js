import React, { Component } from 'react';
import { Provider } from 'react-redux';
import config from './config';
import App from '../App';

/*const REDUX_STORE = config();
console.log("REDUX_STORE",REDUX_STORE);*/
class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: config(),
    };
  }

  render() {
    const { store } = this.state;
   // console.log("store:",store,REDUX_STORE===store);
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}



export default Store;
