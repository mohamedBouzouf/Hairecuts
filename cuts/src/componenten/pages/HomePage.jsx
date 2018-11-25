import React from 'react';
import firebase from 'firebase';
import {
  Page
} from 'framework7-react';
import Authentication from '../login/Authentication';
// import User from '../user/userPage';
import AgendaBarber from '../../componenten/barber/Agenda/agenda'
import './page-css/homepage.css';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Login from '../../componenten/login/login.jsx';
import UserBarberPage from '../../componenten/user/UserBarberPage';
import SettingBarberShop from '../user/Setting/setting';


export default () => (

  // <UserBarberPage />
  <SettingBarberShop />
)
