import {GET_USER} from '../Actions/types';
const init = {
            isBottom: false,
            tab1: '#tab-1',
            tab2: '#tab-2',
            tab3: '#tab-3',
            tab4: '#tab-4',
            photo: '',
            name: '',
            id: ''
}

export default function(state = init, action){

    switch(action.type){
        case GET_USER:
        return{
            ...state
        }
        default:
        return state;

    }
}