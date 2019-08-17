import { GET_LOGIN, SET_LOGIN, BOOL_EMAIL, BOOL_REGISTER } from '../Actions/types';

const init = {
    loginScreenOpened: false,
    registerScreenOpened: false,
    username: '',
    password: '',
    rusername: '',
    rpassword: '',
    current: true,
    IsSignOut: true,
    image: require('../assets/logo/Cuts32_X_32W.png'),
    imagetiny: require('../assets/cuts-resizes/cuts-32_x_32.png')
}

export default function(state = init, action){

    switch(action.type){
        case GET_LOGIN:
        return{
            ...state
        }
        case SET_LOGIN:
        return Object.assign({}, state, {
            username: state.username,
            rusername: state.rusername,
            password: state.password,
            rpassword: state.rpassword
        });
        case BOOL_EMAIL:
        return Object.assign({}, state, {
            loginScreenOpened: !state.loginScreenOpened
        });
        case BOOL_REGISTER:
        return Object.assign({}, state, {
            registerScreenOpened: !state.registerScreenOpened
        });
        default:
        return state;

    }
}