import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import PostDetailPage from './pages/PostDetail';
import PostMainPage from './pages/Main';

Post.propTypes = {
  
};

function Post(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={PostMainPage}/>

      <Route path={`${match.url}/:postId`} component={PostDetailPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Post;