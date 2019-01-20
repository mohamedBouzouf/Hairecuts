import { GET_HOME, BOOL_EMAIL, BOOL_REGISTER } from '../Actions/types';

const init = {
    loginScreenOpened: false,
    registerScreenOpened: false,
    username: '',
    password: '',
    R_username: '',
    R_password: '',
    R_confirmpassword: '',
    current: true,
    IsSignOut: true,
    image: require('../assets/logo/Cuts32_X_32W.png'),
    imagetiny: require('../assets/cuts-resizes/cuts-32_x_32.png')
}

export default function(state = init, action){

    switch(action.type){
        case GET_HOME:
        return{
            ...state
        }
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