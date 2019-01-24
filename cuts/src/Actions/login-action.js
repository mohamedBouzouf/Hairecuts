import { GET_LOGIN, SET_LOGIN, BOOL_EMAIL, BOOL_REGISTER } from './types';

export const getLogin = () => 
{
    return{
        type: GET_LOGIN
    };
};

export const setLogin = (input) => 
{
    return{
        type: GET_LOGIN,
        input: input
    };
};

export const boolEMAIL = (loginScreenOpened) => 
{
    return{
        type: BOOL_EMAIL,
        payload : loginScreenOpened
    };
};

export const boolRegister = (registerScreenOpened) => 
{
    return{
        type: BOOL_REGISTER,
        payload : registerScreenOpened
    };
};