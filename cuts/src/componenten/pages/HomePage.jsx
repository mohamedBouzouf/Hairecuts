import React from 'react';
import {
  Page
} from 'framework7-react';
import Authentication from '../login/Authentication';
// import User from '../user/userPage';
import AgendaBarber from '../../componenten/barber/Agenda/agenda'
import './page-css/homepage.css';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Login from '../../componenten/login/login.jsx';


export default () => (
  <Authentication />
);
