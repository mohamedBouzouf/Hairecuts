import {GET_USER,SET_USER_CHANGES} from './types';

export const getUser = () =>
{
    return {
        type: GET_USER
    };
}

export const setUser = (user) =>
{
    return {
        type: SET_USER_CHANGES,
        user: user
    }
}