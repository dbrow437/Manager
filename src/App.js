import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAmvx5E1iE4xTY-65L7-Aa5uNM430WncNk",
      authDomain: "manager-da1b2.firebaseapp.com",
      databaseURL: "https://manager-da1b2.firebaseio.com",
      projectId: "manager-da1b2",
      storageBucket: "manager-da1b2.appspot.com",
      messagingSenderId: "634823593114"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
