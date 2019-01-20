import { GET_HOME, BOOL_EMAIL, BOOL_REGISTER } from './types';

export const getLogin = () => 
{
    return{
        type: GET_HOME
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