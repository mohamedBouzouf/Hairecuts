import {combineReducers} from 'redux';
import userBarberReducer from './userBarberReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    userBarber: userBarberReducer,
    login: loginReducer
});