import AssetsReducer from './AssetsReducer';
import { selectImageFilesToUpload } from 'services/AppServices';

export const uploadAsset = () => {
    return (dispatch) => {

        new Promise((response, reject) => {

            selectImageFilesToUpload()
                .then((response) => {

                    dispatch({
                        type: AssetsReducer.ADD_ASSET,
                        payload: response
                    })

                })
        })

    }
}

export const renameAsset = (asset_id, name) => {
    return {
        type: AssetsReducer.RENAME_ASSET,
        payload: { asset_id, name }
    }
}

export const deleteAsset = () => {
    return {
        type: AssetsReducer.DELETE_ASSET
    }
}


