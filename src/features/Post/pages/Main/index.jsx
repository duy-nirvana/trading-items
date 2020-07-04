import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../../components/PostList';

PostMainPage.propTypes = {
  
};

function PostMainPage(props) {
  return (
    <div className="main-page">
      <PostList />
    </div>
  );
}

export default PostMainPage;