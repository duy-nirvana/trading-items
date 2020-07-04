import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { Col, Container, Row, Button } from 'reactstrap';
import Select from 'react-select';
import './PostDetail.scss';

PostDetail.propTypes = {
  
};

function PostDetail(props) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Container>
      <Row className="post-detail">
        <Col lg="5">
          <img style={{width:"100%"}} src="https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0" alt=""/>
          <h3>Card title</h3>
          <p>Some quick example text</p>
        </Col>
        <Col lg="2" className="post-detail__icon">
          <FaExchangeAlt size="5em"/>
        </Col>
        <Col lg="5" className="post-detail__exchange">
          <div>
            <h3>Choose your item you wanna exchange</h3>
            <Select options={options} className="post-detail__select" />
            <Button color="primary" className="w-100">Exchange</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;