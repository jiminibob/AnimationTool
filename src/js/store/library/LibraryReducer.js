// methods
import { getSelection, getSelectionType } from 'store/selection/SelectionReducer';
import { getAssets } from 'store/assets/AssetsReducer';

// reducers
import SelectionReducer from 'store/selection/SelectionReducer';

/*
========================================================================================
    BASE
========================================================================================
*/

const initState = {
    searchFilter: ""
};

/*
========================================================================================
    UPDATE
========================================================================================
*/

const LibraryReducer = (state = initState, action) => {

    let nextState = {};

    switch (action.type) {

        case LibraryReducer.SET_SEARCH_FILTER:

            nextState.searchFilter = action.payload;
            return { ...state, ...nextState };
    }

    return state;
};

/*
========================================================================================
    CONSTANTS
========================================================================================
*/

LibraryReducer.SET_SEARCH_FILTER = 'LIBRARY_SET_SEARCH_FILTER';

/*
========================================================================================
    GETTERS
========================================================================================
*/

export const getSearchFilter = (state) => {
    return state.library.searchFilter;
}

export const getLibraryAssets = (state) => {
    return getAssets(state, state.library.searchFilter.length > 0 ? state.library.searchFilter : false)
}

export const getSelectedAssets = (state) => {

    if (getSelectionType(state) === SelectionReducer.TYPE_LIBRARY_ASSET) {
        return getSelection(state);
    }

    return [];
}

// EXPORT

export default LibraryReducer;
