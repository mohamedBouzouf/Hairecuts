import { GET_BARBER, SET_BARBER_CHANGES } from './types';

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