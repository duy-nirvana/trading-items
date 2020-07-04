import React from 'react';
import PropTypes from 'prop-types';
import CreateProduct from '../../components/CreateProduct';
import './Create.scss';
import { Container, Row, Col } from 'reactstrap';

CreateProductPage.propTypes = {
  
};

function CreateProductPage(props) {
  return (
    <Container className="create-product-page">
      <Row>
        <Col>
          <h3>Create your product</h3>
          <CreateProduct className="create-product-page__form"/> 
        </Col>
      </Row>
    </Container>
  );
}

export default CreateProductPage;