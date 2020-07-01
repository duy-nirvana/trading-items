import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/posts"
              activeClassName="header__link--active"
            >
              Website cua Duy
            </NavLink>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/login"
              activeClassName="header__link--active"
            >
              Login
            </NavLink>

            <NavLink
              exact
              className="header__link ml-2"
              to="/register"
              activeClassName="header__link--active"
            >
              Register
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;