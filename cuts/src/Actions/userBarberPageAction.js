import {GET_USERBARBER,SET_USERBARBER_IMAGE, SET_USERBARBER_NAME} from './types';

export const getUser = () =>
{
    return {
        type: GET_USERBARBER
    };
}

export const SetUserImage = (photo) =>
{
    return{
        type: SET_USERBARBER_IMAGE,
        photo: photo
    }
}

export const SetUserName = (name) =>
{
    return{
        type: SET_USERBARBER_NAME,
        name: name
    }
}

