import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Register from './features/User/pages/Register';
import Login from './features/User/pages/Login';
import User from './features/User';
import Product from './features/Product';


// Lazy load
const Post = React.lazy(() => import('./features/Post'));

function App() {
  return (
    <div className="trading-product-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          
          <div>
            <Switch>
              <Redirect exact from="/" to='/posts' />

              <Route path="/posts" component={Post} />
              <Route path="/product" component={Product} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              
              <Route component={NotFound} />
            </Switch>          
          </div>
        </BrowserRouter> 
      </Suspense>
    </div>
  );
}

export default App;
