import React, { Component } from 'react';

import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';


import Login from './components/Login';
import Index from './components/Index';

class App extends Component {
  render() {
    return (
            <BrowserRouter>
            <div>
            <Route exact path='/' component={Login} />
            <Route path='/index' component={Index} />
            </div>
            </BrowserRouter>
    );
  }
}

export default App;
