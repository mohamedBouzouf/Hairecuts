import { GET_HOME } from '../Actions/types';

const init = {
    loginScreenOpened: false,
    registerScreenOpened: false,
    username: '',
    password: '',
    R_username: '',
    R_password: '',
    R_confirmpassword: '',
    photos: [],
    likes:0,
    dislikes:0,
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
        default:
        return state;

    }
}