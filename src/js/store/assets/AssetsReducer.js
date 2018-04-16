
/*
========================================================================================
    BASE
========================================================================================
*/

const initState = {
    items: []
};

/*
========================================================================================
    UPDATE
========================================================================================
*/

const AssetsReducer = (state = initState, action) => {

    let nextState = {};

    switch (action.type) {

        case AssetsReducer.ADD_ASSET:

            nextState.items = [].concat(state.items, action.payload);

            return { ...state, ...nextState };

        case AssetsReducer.RENAME_ASSET:

            nextState.items = state.items.reduce((arr, item) => {

                if (item.id === action.payload.asset_id) {

                    item = { ...item };
                    item.name = action.payload.name;
                }

                arr.push(item);
                return arr;

            }, []);

            return { ...state, ...nextState };

    }

    return state;
};

/*
========================================================================================
    CONSTANTS
========================================================================================
*/

AssetsReducer.ADD_ASSET = 'AssetsReducer.ADD_ASSET';
AssetsReducer.RENAME_ASSET = 'AssetsReducer.RENAME_ASSET';
AssetsReducer.DELETE_ASSET = 'AssetsReducer.DELETE_ASSET';

/*
========================================================================================
    GETTERS
========================================================================================
*/

export const getAssets = (state, nameFilter) => {

    if (nameFilter) {

        return this.filterAssetsBySearch(state.assets, nameFilter);
    }

    return state.assets.items;
}

/*
========================================================================================
    INTERNAL METHODS
========================================================================================
*/

const filterAssetsBySearch = (assets, search) => {

    // find all assets that match the search term
    const filtered = assets.items.reduce((arr, asset) => {

        if (asset.name.includes(search)) {
            arr.push(asset);
        }

        return arr;
    }, [])

    // sort assets by order in which search term appears and return result
    return filtered.sort((a, b) => {
        return a.name.indexOf(search) < b.name.indexOf(search) ? -1 : 1
    });

}

// EXPORT 

export default AssetsReducer;