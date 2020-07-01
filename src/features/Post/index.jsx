import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/Main';
import NotFound from '../../components/NotFound';
import PostDetail from './pages/PostDetail';
import PostDetailPage from './pages/PostDetail';

Post.propTypes = {
  
};

function Post(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage}/>

      <Route path={`${match.url}/:postId`} component={PostDetailPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Post;