import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./App.scss";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

export default class App extends Component {
  // component state
  state = {
    loggedIn: false,
    userData: {
      name: "",
      email: "",
    },
  };

  // checks for the userData stored in localstorage
  // in case 'userData' is found, the state is updated and relevant screen is rendered
  checkStatus = () => {
    let userDataStr = localStorage.getItem("userData");
    let userData = userDataStr == null ? null : JSON.parse(userDataStr);
    if (userData && userData.name != null) {
      this.setState({ ...this.state, userData, loggedIn: true });
    }
  };

  componentDidMount() {
    // checks on mounting the component
    this.checkStatus();
  }

  // sets the state to initial state
  logout = () => {
    this.setState({
      ...this.state,
      loggedIn: false,
      userData: {
        name: "",
        email: "",
      },
    });
    localStorage.setItem("userData", null);
  };

  // updates the state (this fn is passed down the tree)
  signUp = (userData) => {
    console.log("signup fn:", userData);
    this.setState({
      loggedIn: true,
      userData: {
        name: userData.name,
        email: userData.email,
      },
    });
    // once the user is logged in, it's updated in localstorage also
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  render() {
    return (
      <div>
        <div className="text-center ">
          <img src="/logo512.png" width="80px" alt="logo"></img>
        </div>
        <div className="body">
          <Card>
            {/* based on the Auth state, Home/SignUp Page is rendered */}
            {this.state.loggedIn ? (
              <Home
                userData={this.state.userData}
                onLogoutPressed={this.logout}
              ></Home>
            ) : (
              <SignUp onSignUp={this.signUp}></SignUp>
            )}
          </Card>
        </div>
      </div>
    );
  }
}
