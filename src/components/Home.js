import React, { Component } from "react";
import { myFirebase } from "../firebase/firebase";
import SearchPage from './SearchPage';
import RandomSent from './RandomSent';

class Home extends Component {
  render() {
    const user = myFirebase.auth().currentUser;
    console.log(user);
    return (
      <div>
        <RandomSent/>
        <SearchPage />
      </div>
    );
  }
}

export default Home;