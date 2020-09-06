import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./App.scss";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

export default class App extends Component {
  state = {
    loggedIn: false,
    userData: {
      name: "",
      email: "",
    },
  };

  checkStatus = () => {
    let userDataStr = localStorage.getItem("userData");
    let userData = userDataStr == null ? null : JSON.parse(userDataStr);
    if (userData && userData.name != null) {
      this.setState({ ...this.state, userData, loggedIn: true });
    }
  };

  componentDidMount() {
    this.checkStatus();
  }

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

  login = (userData) => {
    this.setState({
      loggedIn: true,
      userData: {
        name: userData.name,
        email: userData.email,
      },
    });
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
            {this.state.loggedIn ? (
              <Home
                userData={this.state.userData}
                onLogoutPressed={this.logout}
              ></Home>
            ) : (
              <SignUp onSignUp={this.login}></SignUp>
            )}
          </Card>
        </div>
      </div>
    );
  }
}
