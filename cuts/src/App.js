import React, { Component } from 'react';
import './App.css';
// import Login from './componenten/login/login';
import Barber from './componenten/barber/barber'


class App extends Component {
  render() {
    return (
      <div className="login-background">
        <div className="container">
          <Barber />
        </div>
      </div>
    );
  }
}

export default App;
