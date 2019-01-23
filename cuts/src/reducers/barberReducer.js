import {GET_BARBER,SET_BARBER_CHANGES} from '../Actions/types';

const init = {
    id:'1',
    name: 'Lionlockx Hair Studios',
    photo:require('../assets/LoinLockx/logo.jpg'),
    likes:0,
    dislikes:0,
    score:0,
    photos: {
            NewCuts:[require('../assets/LoinLockx/foto1.jpg'),
            require('../assets/LoinLockx/foto2.jpg'),
            require('../assets/LoinLockx/foto4.jpg')
        ],
            BestCuts:[require('../assets/LoinLockx/best1.jpg'),
            require('../assets/LoinLockx/best3.jpg'),
            require('../assets/LoinLockx/best4.jpg')],
            OldCuts:[ require('../assets/LoinLockx/other.jpg'),
            require('../assets/LoinLockx/other1.jpg')]

        
    },
    comments:[{
        id:'',
        title: '',
        text: '',
    }],
    email:'',
    instagram:'https://www.instagram.com/lionlox/',
    rating:4,
    facebook:'https://www.facebook.com/LIONLOCKX',
    signInTimes:0,
    firstTimeLoggedIn:'',
    lastTimeLoggedIn:'',
    likes:0,
    dislikes:0, 
    IsFavorite: 0,
    appointment: Date,
    followers: 0
}

export default function(state = init, action){

    switch(action.type){
        case GET_BARBER:
        return{
            ...state
        }
        case SET_BARBER_CHANGES:
        return Object.assign({}, state, {
            photo: state.profilePhoto,
            name: state.name
          })
        default:
        return state;

    }
}