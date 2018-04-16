/*
========================================================================================
    BASE
========================================================================================
*/

const initState = {
    type: false,
    selected: []
};

/*
========================================================================================
    UPDATE
========================================================================================
*/

const SelectionReducer = (state = initState, action) => {

    let nextState = {};

    switch (action.type) {

        case SelectionReducer.SET_SELECTION:
            nextState.type = action.payload.selection_type;
            nextState.selected = [action.payload.item_id];
            return { ...state, ...nextState }

        case SelectionReducer.ADD_SELECTION:
            console.log(action.payload.selection_type, action.payload.item_id);
            if (state.type != action.payload.selection_type) {
                nextState.type = action.payload.selection_type;
                nextState.selected = [...action.payload.item_id]
            }
            else {
                nextState.selected = [...state.selected, action.payload.item_id]
            }
            return { ...state, ...nextState }

        case SelectionReducer.CLEAR_SELECTION:
            nextState.type = false;
            nextState.selected = [];
            return { ...state, ...nextState }

    }

    return state;
};

/*
========================================================================================
    CONSTANTS
========================================================================================
*/

SelectionReducer.ADD_SELECTION = 'SelectionReducer.ADD_SELECTION';
SelectionReducer.SET_SELECTION = 'SelectionReducer.SET_SELECTION';
SelectionReducer.CLEAR_SELECTION = 'SelectionReducer.CLEAR_SELECTION';
SelectionReducer.TYPE_LIBRARY_ASSET = 'SelectionReducer.TYPE_LIBRARY_ASSET';
SelectionReducer.TYPE_TIMELINE_LAYER = 'SelectionReducer.TYPE_TIMELINE_LAYER';
SelectionReducer.TYPE_TIMELINE_FRAME = 'SelectionReducer.TYPE_TIMELINE_FRAME';
SelectionReducer.TYPE_STAGE_ASSET = 'SelectionReducer.TYPE_STAGE_ASSET';

/*
========================================================================================
    GETTERS
========================================================================================
*/

export const getSelectionType = (state) => {
    return state.selection.type;
}
export const getSelection = (state) => {
    return state.selection.selected;
}

// EXPORT
export default SelectionReducer;