import React from 'react';
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const SignUpForm = ({
                      onSubmit,
                      onChange,
                      value: {name, email, password}
                    }) => (
  <form onSubmit={onSubmit}>
    <FormGroup label="Name" labelFor="name-input">
      <InputGroup
        id="name-input"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
    </FormGroup>
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
      <Link to="/sign-in">Sign In</Link>
      <Button rightIcon="arrow-right" intent="success" type="submit" text="Go"/>
    </div>
  </form>
);

export default SignUpForm;
