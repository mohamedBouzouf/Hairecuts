import { GET_BARBER, SET_BARBER_CHANGES, SET_BARBER_UPDATE } from './types';

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

export const Update = (update) =>
{
    return {
        type: SET_BARBER_UPDATE,
        update: update,
        
    }
}