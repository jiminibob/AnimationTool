import KeyboardReducer from './KeyboardReducer';

export const registerKeyDown = (key) => {
    return {
        type: KeyboardReducer.REGISTER_KEY_DOWN,
        payload: key
    }
}

export const registerKeyUp = (key) => {
    return {
        type: KeyboardReducer.REGISTER_KEY_UP,
        payload: key
    }
}