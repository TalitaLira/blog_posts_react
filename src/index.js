import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promisse from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    {/* // gotta wrap everything inside a div */}
      <div> 
        <Route path="/" component={PostsIndex} />

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
