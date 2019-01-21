import {GET_USERBARBER, SET_USERBARBER_IMAGE, SET_USERBARBER_NAME} from '../Actions/types';
const init = {
            isBottom: false,
            tab1: '#tab-1',
            tab2: '#tab-2',
            tab3: '#tab-3',
            tab4: '#tab-4',
            photo: '',
            photos: [],
            likes:0,
            dislikes:0, 
            IsFavorite: false,
            appointment: Date,
            sendermail: '',
            sender:'',
            rating:0,
            receiver:'',
            name: '',
            id: ''
}

export default function(state = init, action){

    switch(action.type){
        case GET_USERBARBER:
        return{
            ...state
        }
        case SET_USERBARBER_IMAGE:
        return Object.assign({}, state, {
            photo: state.photo
          })

        case SET_USERBARBER_NAME:
        return Object.assign({}, state, {
            name: state.name
          })
    
        default:
        return state;

    }
}