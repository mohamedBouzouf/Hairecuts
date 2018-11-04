import React, { Component } from 'react';
import './App.css';
import Login from './componenten/login/login';


class App extends Component {
  render() {
    return (
      <div className="login-background">
        <div className="container">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
