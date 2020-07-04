import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CreateProduct from './pages/Create';
import CreateProductPage from './pages/Create';

Product.propTypes = {
  
};

function Product(props) {
  const match = useRouteMatch();
  
  return (
    <Switch>
      <Route exact path={`${match.url}/create`} component={CreateProductPage}/>

      
    </Switch>
  );
}

export default Product;