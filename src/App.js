/*
Create your own react app.
You only need to have one page  That page will display information on a Pokemon and a formik form to ask for the Pokemon from the user.
Have this app get information for PokeAPI.co for one pokemon
You can grab the same information you grabbed in the prev. pokemon assignments.
and display the information on the screen try and display the sprite image in the page as an actual image aswell
 */

import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      test: "This is a test",
    };
  }

  componentDidMount() {
    console.log("in component Did mount");
  }
  componentDidUpdate() {
    console.log("in component Did update");
  }

  componentWillUnmount() {
    console.log("in component will unmount");
  }

  setUser = (user) => {
    this.setState({ user: user }, () =>
      console.log("User is", this.state.user)
    );
  };

  render() {
    return (
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}
