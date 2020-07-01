import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Login.scss';

Login.propTypes = {
  
};

function Login(props) {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <Form className="login-page__form">
        <FormGroup >
          <Label for="email">Email</Label>
          <Input className="login-page__input" type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup >
          <Label for="password">Password</Label>
          <Input className="login-page__input" type="password" name="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <Button className="w-100">Login</Button>
      </Form>
    </div>
  );
}

export default Login;