import { GET_BARBER, SET_BARBER_CHANGES, SET_BARBER_UPDATE, SET_USERBARBER_CHANGES } from './types';

export const getBarber = () => 
{
    return{
        type: GET_BARBER
    };
};

export const setBarber = (user) =>
{
    return {
        type: SET_BARBER_CHANGES,
        user: user
    }
}

export const setUserNumber = (number) =>
{
    return{
        type: SET_USERBARBER_CHANGES,
        number: number
    }
}

export const Update = (update) =>
{
    return {
        type: SET_BARBER_UPDATE,
        update: update,
        
    }
}