import React, { Component } from 'react';
import './App.css';
// import Barber from './componenten/barber/barber'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "semantic-ui-css/semantic.min.css"
import Register from './componenten/register/register';





class App extends Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default App;
