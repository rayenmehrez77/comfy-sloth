import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./SignUpPage.scss";
import image from "../../assets/undraw_work_from_anywhere_7sdx.svg";
import { Link } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { ReactComponent as LogoGoogle } from "../../assets/search.svg";

class SignUpPage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;

    return (
      <div className="signup-page">
        <NavigationComponent link="Sign up" />
        <div className="signup-page__info">
          <img src={image} alt="signup page" />
          <div className="signup-page__content">
            <h1>
              Sign Up to <span>ComfySloth</span>{" "}
            </h1>
            <div className="signup-page__underline"></div>
            <div className="signup-page__signup">
              <span>I already have an account </span>
              <Link to="/login" className="signup-page-link ">
                Log in
              </Link>
              <form className="signup-page__form" onSubmit={this.handleSubmit}>
                <FormInput
                  label="Name: "
                  name="text"
                  type="name"
                  value={name}
                  handleChange={this.handleChange}
                  required
                />
                <FormInput
                  label="Email: "
                  name="email"
                  type="email"
                  value={email}
                  handleChange={this.handleChange}
                  required
                />
                <FormInput
                  label="Password: "
                  name="password"
                  type="password"
                  value={password}
                  handleChange={this.handleChange}
                  required
                />
                <FormInput
                  label="Confirm Password: "
                  name="password"
                  type="password"
                  value={confirmPassword}
                  handleChange={this.handleChange}
                  required
                />
                <div className="signup-page__buttons">
                  <CustomButton>Create an account</CustomButton>
                  <CustomButton isGoogle>Sign in with Google</CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
