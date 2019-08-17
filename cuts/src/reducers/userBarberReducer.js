import {GET_USERBARBER, SET_USERBARBER_CHANGES} from '../Actions/types';
const init = {
            isBottom: false,
            tab1: '#tab-1',
            tab2: '#tab-2',
            tab3: '#tab-3',
            tab4: '#tab-4',
            likes:0,
            IsFavorite: false,
            appointment: Date,
            
}

export default function(state = init, action){

    switch(action.type){
        case GET_USERBARBER:
        return{
            ...state
        }
        case SET_USERBARBER_CHANGES:
        return Object.assign({}, state, {
            photo: state.photo,
            name: state.name
          })
        default:
        return state;

    }
}