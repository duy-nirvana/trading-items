import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../../components/PostList';

MainPage.propTypes = {
  
};

function MainPage(props) {
  return (
    <div className="main-page">
      <PostList />
    </div>
  );
}

export default MainPage;