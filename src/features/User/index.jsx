import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

User.propTypes = {
  
};

function User(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={}/>
    </Switch>
  );
}

export default User;