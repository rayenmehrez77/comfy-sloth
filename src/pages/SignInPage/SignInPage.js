import React from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import FormInput from "../../Components/FormInput/FormInput";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./SignInPage.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignInPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin-page">
        <NavigationComponent link="Sign in" />
        <form className="signin-page__form">
          <h3>Sign in </h3>
          <span>I have an account </span>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignInPage;
