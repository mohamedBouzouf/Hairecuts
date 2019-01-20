import {GET_USER, SET_USERBARBER_IMAGE} from '../Actions/types';
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
        case GET_USER:
        return{
            ...state
        }
        case SET_USERBARBER_IMAGE:
        return{
            ...state,
            photo: action.text
        }
    
        default:
        return state;

    }
}