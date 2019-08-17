import {GET_USERBARBER,SET_USERBARBER_CHANGES} from './types';

export const getUserBarber = () =>
{
    return {
        type: GET_USERBARBER
    };
}

export const SetUserBarberChanges = (changes) =>
{
    return{
        type: SET_USERBARBER_CHANGES,
        changes: changes
    }
}




