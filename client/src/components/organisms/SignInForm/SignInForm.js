import React from 'react';
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const SignInForm = ({
                      onSubmit,
                      onChange,
                      value: {email, password}
                    }) => (
  <form onSubmit={onSubmit}>
    <FormGroup label="Email" labelFor="email-input">
      <InputGroup
        id="email-input"
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
    </FormGroup>
    <FormGroup label="Password" labelFor="password-input">
      <InputGroup
        id="password-input"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
    </FormGroup>
    <div className="form-buttons">
      <Link to="/sign-up">Sign Up</Link>
      <Button rightIcon="arrow-right" intent="success" type="submit" text="Go"/>
    </div>
  </form>
);

export default SignInForm;
