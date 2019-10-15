import React, { useState } from "react";
import { Card, H3 } from "@blueprintjs/core";
import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate";
import SignUpForm from "../../organisms/SignUpForm/SignUpForm";

const SignUpPage = ({signUpAction, isLoggedIn}) => {
  const initialValue = {name: '', email: '', password: ''};
  const [values, setValue] = useState(initialValue);

  const handleChange = ({target: {name, value}}) => {
    setValue({...values, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpAction(values);
  };

  return (
    <AuthTemplate isLoggedIn={isLoggedIn}>
      <Card>
        <H3>Sign Up</H3>
        <SignUpForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={values}
        />
      </Card>
    </AuthTemplate>
  )
};

export default SignUpPage;
