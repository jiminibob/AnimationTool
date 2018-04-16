import LibraryReducer from './LibraryReducer';
import SelectionReducer from 'store/selection/SelectionReducer';
import { selectionSetItem, selectionAddItem } from 'store/selection/SelectionActions';
import { uploadAsset } from 'store/assets/AssetsActions';

export const setLibrarySearchFilter = (value) => {
    return {
        type: LibraryReducer.SET_SEARCH_FILTER,
        payload: value
    }
}

export const uploadNewAsset = () => {
    return uploadAsset();
}

export const selectLibraryAsset = (asset_id) => {
    return selectionSetItem(SelectionReducer.TYPE_LIBRARY_ASSET, asset_id);
}

export const addToSelectedLibraryAssets = (asset_id) => {
    return selectionAddItem(SelectionReducer.TYPE_LIBRARY_ASSET, asset_id);

}
