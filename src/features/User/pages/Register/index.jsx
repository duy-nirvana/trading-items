import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Register.scss';

Register.propTypes = {
  
};

function Register(props) {
  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <Form className="register-page__form">
        <FormGroup>
            <Label for="name">Name</Label>
            <Input className="register-page__input" type="text" name="name" id="name"/>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input className="register-page__input" type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>

        <FormGroup >
          <Label for="password">Password</Label>
          <Input className="register-page__input" type="password" name="password" id="password" placeholder="Enter your password" />
        </FormGroup>

        <FormGroup>
            <Label for="phone">Phone</Label>
            <Input className="register-page__input" type="text" name="phone" id="phone"/>
        </FormGroup>

        <FormGroup>
            <Label for="address">Address</Label>
            <Input className="register-page__input" type="text" name="adress" id="address"/>
        </FormGroup>
        <Button className="register-page__button w-100" color="primary">Register</Button>
      </Form>
    </div>
  );
}

export default Register;