import styled, { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    box-sizing: border-box; 
    padding: 0; 
    margin: 0; 
`;
function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "is-google" : "custom-button"}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;

export const CustomButton = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.8rem;
  background-color: #ab7a5f;
  border-radius: 3px;
  height: 2.5rem;
  outline-style: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  color: #fff;
  font-weight: 500;

  &:hover {
    color: #64412e;
    background-color: #bb9784;
  }
`;
