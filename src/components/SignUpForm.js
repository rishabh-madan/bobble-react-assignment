import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "eve.holt@reqres.in",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !(
        this.state.firstName &&
        this.state.lastName &&
        this.state.email &&
        this.state.password
      )
    )
      window.alert("All Fields are mandatory!");
    else if (this.state.password.length < 8)
      window.alert("Password must be longer than 8 characters!");
    else {
      var data = JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      });

      var request = {
        method: "post",
        url: "https://reqres.in/api/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      try {
        await axios(request);
        this.props.onSignUp({
          name: `${this.state.firstName} ${this.state.lastName}`,
          email: this.state.email,
        });
      } catch (error) {
        window.alert("Something went wrong at server-side!");
      }
    }
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="fName">
          <Form.Control
            type="name"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={(e) => {
              this.setState({
                firstName: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="lName">
          <Form.Control
            type="name"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={(e) => {
              this.setState({
                lastName: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group
          controlId="email"
          onClick={() => {
            window.alert(
              "At reqres.in, Only defined users succeed registration!\nPlease continue with this email address only."
            );
          }}
        >
          <Form.Control
            type="email"
            placeholder="Email Address"
            disabled={true}
            value={this.state.email}
            onChange={(e) => {
              this.setState({
                email: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              this.setState({
                password: e.target.value,
              });
            }}
          />
        </Form.Group>
        <p className="smallText">
          By clicking Sign Up, you agree to our{" "}
          <a href="https://www.google.com/" target="blank">
            Terms of Use
          </a>{" "}
          and our{" "}
          <a href="https://www.google.com/" target="blank">
            Privacy Policy
          </a>
        </p>
        <div className="text-center">
          <Button className="btn" onClick={this.handleSubmit}>
            SIGN UP
          </Button>
        </div>
      </Form>
    );
  }
}