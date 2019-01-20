import {GET_USER,SET_USERBARBER_IMAGE} from './types';

export const getUser = () =>
{
    return {
        type: GET_USER
    };
}

export const SetUserImage = (photo) =>
{
    return{
        type: SET_USERBARBER_IMAGE,
        photo: photo
    }
}