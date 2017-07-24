import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';
import Config from 'pages/Config';
import Detail from 'pages/Detail';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/Config' component={Config}/>
        <Route path='/Detail:index' component={Detail}/>
      </div>
    );
  }
}

export default App;
