import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Header from './components/Header';

// Lazy load
const Post = React.lazy(() => import('./features/Post'));

function App() {
  return (
    <div className="trading-product-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to='/posts' />

            <Route path="/posts" component={Post} />
            <Route component={NotFound} />
          </Switch>          
        </BrowserRouter> 
      </Suspense>
    </div>
  );
}

export default App;
