import React from 'react';
import PropTypes from 'prop-types';
import PostDetail from '../../components/PostDetail';

PostDetailPage.propTypes = {
  
};

function PostDetailPage(props) {
  return (
    <div className="postdetail-page">
      <PostDetail />
    </div>
  );
}

export default PostDetailPage;