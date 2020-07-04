import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import './CreateProduct.scss';

CreateProduct.propTypes = {
  
};

const fakeTypes = [
  {value: 1, label: "Tech"},
  {value: 2, label: "Food"},
  {value: 3, label: "Accesories"},
]


function CreateProduct(props) {
  return (
    <Form className="create-product-form">
      <FormGroup>
        <Label for="name">Name</Label> 
        <Input type="name" name="name" id="name" />
      </FormGroup>

      <FormGroup>
        <Label for="types">Type</Label> 
        <Select
          defaultValue={[fakeTypes[0]]}
          isMulti
          name="types"
          options={fakeTypes}
          id="types"
          className="create-product-form__types"
          classNamePrefix="select"
        />
      </FormGroup>

      <FormGroup>
        <Label for="amount">Amount</Label> 
        <Input type="number" name="amount" id="amount" />
      </FormGroup>

      <Button className="w-100">Create</Button>
    </Form>
  );
}

export default CreateProduct;