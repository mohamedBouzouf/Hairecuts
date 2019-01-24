import {GET_USER,SET_USER_CHANGES} from '../Actions/types';

const init = {
    id:'',
    name: '',
    profilePhoto:'',
    likes:'',
    dislikes:'',
    score:0,
    photos:[],
    comments:[{
        id:'',
        title: '',
        text: '',
    }],
    email:'',
    signInTimes:0,
    firstTimeLoggedIn:''
}

export default function(state = init, action){

    switch(action.type){
        case GET_USER:
        return{
            ...state
        }
        case SET_USER_CHANGES:
        return Object.assign({}, state, {
            photo: state.profilePhoto,
            name: state.name,
            firstTimeLoggedIn: state.firstTimeLoggedIn
          })
        default:
        return state;

    }
}