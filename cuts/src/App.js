import React, { Component } from 'react';
import './App.css';
// import Barber from './componenten/barber/barber'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "semantic-ui-css/semantic.min.css";
import Authentication from './componenten/login/Authentication';
import User from './componenten/user/user';

// import Register from "./componenten/login/register/register"


class App extends Component {
  render() {
    return (
      <div className="App">
        <User />
      </div>
    );
  }
}

export default App;
