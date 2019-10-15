import React, { useState } from "react";
import { Card, H3 } from "@blueprintjs/core";
import './SignInPage.scss';
import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate";
import SignInForm from "../../organisms/SignInForm/SignInForm";

const SignInPage = ({signInAction, isLoggedIn}) => {
  const initialValue = {email: '', password: ''};
  const [values, setValue] = useState(initialValue);

  const handleChange = ({target: {name, value}}) => {
    setValue({...values, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInAction(values);
  };

  return (
    <AuthTemplate isLoggedIn={isLoggedIn}>
      <Card>
        <H3>Sign In</H3>
        <SignInForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={values}
        />
      </Card>
    </AuthTemplate>
  )
};

export default SignInPage;
