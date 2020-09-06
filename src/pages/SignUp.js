import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import SignUpForm from "../components/SignUpForm";

import keys from "../config/keys";

export default class SignUp extends Component {
  responseFacebook = (response) => {
    if (!(response && response.name)) {
      window.alert("Something went wrong!");
    } else
      this.props.onSignUp({
        name: response.name,
        email: response.email,
      });
  };

  responseGoogle = (response) => {
    if (!(response && response.name)) {
      window.alert("Something went wrong!");
    } else
      this.props.onSignUp({
        name: response.profileObj.name,
        email: response.profileObj.email,
      });
  };

  failureGoogle = () => {
    // window.alert("Something went wrong!");
  };

  render() {
    return (
      <Card.Body>
        <div className="text-center">
          <h6>SIGN UP</h6>
          <br />
          <h3>Create Your Account</h3>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vulputate vestibulum lobortis.
          </Card.Text>
          <br />
          <Container>
            <Row>
              <Col>
                <GoogleLogin
                  clientId={keys.googleClientId}
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.failureGoogle}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <Button
                      variant="light"
                      className="social-btn"
                      onClick={renderProps.onClick}
                    >
                      <FcGoogle size={24} />
                      {"  "}
                      Sign up with Google
                    </Button>
                  )}
                />
              </Col>
              <Col>
                <FacebookLogin
                  appId={keys.facebookAppId}
                  fields="name,email"
                  callback={this.responseFacebook}
                  render={(renderProps) => (
                    <Button
                      variant="light"
                      className="social-btn"
                      onClick={renderProps.onClick}
                    >
                      <AiFillFacebook size={24} color="#3b5998" />
                      {"  "}
                      Sign up with Facebook
                    </Button>
                  )}
                />
              </Col>
            </Row>
          </Container>
          <hr />
        </div>
        <SignUpForm onSignUp={this.props.onSignUp}></SignUpForm>
      </Card.Body>
    );
  }
}
