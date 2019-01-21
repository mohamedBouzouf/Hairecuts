import {combineReducers} from 'redux';
import userBarberReducer from './userBarberReducer';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

export default combineReducers({
    userBarber: userBarberReducer,
    login: loginReducer,
    user: userReducer
});