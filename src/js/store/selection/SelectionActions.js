import SelectionReducer from './SelectionReducer';

export const selectionAddItem = (selection_type, item_id) => {
    return {
        type: SelectionReducer.ADD_SELECTION,
        payload: { selection_type, item_id }
    }
}

export const selectionSetItem = (selection_type, item_id) => {
    return {
        type: SelectionReducer.SET_SELECTION,
        payload: { selection_type, item_id }
    }
}

export const selectionClear = () => {
    return {
        type: SelectionReducer.CLEAR_SELECTION
    }
}