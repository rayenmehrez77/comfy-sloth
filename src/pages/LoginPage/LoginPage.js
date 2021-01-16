import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./LoginPage.scss";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="login-page">
        <NavigationComponent link="Login" />
        <h1>Sign in</h1>
      </div>
    );
  }
}

export default LoginPage;
