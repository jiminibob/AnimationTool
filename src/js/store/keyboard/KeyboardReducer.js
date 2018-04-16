/*
========================================================================================
    BASE
========================================================================================
*/

const initState = {
    keysDown: []
};

/*
========================================================================================
    UPDATE
========================================================================================
*/

const KeyboardReducer = (state = initState, action) => {

    let nextState = {};

    switch (action.type) {

        case KeyboardReducer.REGISTER_KEY_DOWN:

            nextState.keysDown = [...state.keysDown, action.payload];

            return { ...state, ...nextState }

        case KeyboardReducer.REGISTER_KEY_UP:

            if (state.keysDown.length > 0) {
                nextState.keysDown = state.keysDown.reduce((arr, key) => {
                    if (key != action.payload) {
                        arr.push(key);
                    }
                    return arr;
                }, [])
            }


            return { ...state, ...nextState }

    }

    return state;
};

/*
========================================================================================
    CONSTANTS
========================================================================================
*/

KeyboardReducer.REGISTER_KEY_DOWN = 'KeyboardReducer.REGISTER_KEY_DOWN';
KeyboardReducer.REGISTER_KEY_UP = 'KeyboardReducer.REGISTER_KEY_UP';

/*
========================================================================================
    GETTERS
========================================================================================
*/

export const isKeyDown = (state, key) => {
    return state.keyboard.keysDown.includes(key);
}

export const isShiftKeyDown = (state) => {
    return isKeyDown(state, 16);
}

// EXPORT

export default KeyboardReducer;