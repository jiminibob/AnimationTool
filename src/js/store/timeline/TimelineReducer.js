// methods
import { findArrayElementById, findArrayIndexByElementId, changeArrayElementIndex, replaceArrayElement } from 'store/utils/Utils';
import { TimelineLayerModel } from 'model/TimelineLayerModel';

/*
========================================================================================
    BASE
========================================================================================
*/

const initState = {
    layers: [],
    frame_count: 500,
    layers_created: 0,
    show_context_menu: false,
    selected_frame: false
};

/*
========================================================================================
    UPDATE
========================================================================================
*/

const TimelineReducer = (state = initState, action) => {

    let nextState = {};
    switch (action.type) {

        case TimelineReducer.ADD_LAYER:

            nextState.layers = addNewLayer(state.layers, state.layers_created);
            nextState.layers_created = state.layers_created + 1;

            return { ...state, ...nextState };

        case TimelineReducer.SWAP_LAYERS:

            nextState.layers = swapLayers(state.layers, action.payload.layer_a_id, action.layer_b_id.layer_a_id);

            return { ...state, ...nextState };

        case TimelineReducer.RENAME_LAYER:

            nextState.layers = renameLayer(state.layers, action.payload.layer_id, action.payload.name);

            return { ...state, ...nextState };

    }

    return state;
};

/*
========================================================================================
    CONSTANTS
========================================================================================
*/

TimelineReducer.ADD_LAYER = 'TimelineReducer.ADD_LAYER';
TimelineReducer.SWAP_LAYERS = 'TimelineReducer.SWAP_LAYERS';
TimelineReducer.RENAME_LAYER = 'TimelineReducer.RENAME_LAYER';


/*
========================================================================================
    INTERNAL
========================================================================================
*/

const addNewLayer = (layers, layersCreated) => {
    // create new layer from model, give it a name based on layers created
    const layer = new TimelineLayerModel();
    layer.name = 'Layer ' + layersCreated;
    // add and return new layers
    return [...layers, layer];
}

const swapLayers = (layers, swapA, swapB) => {

    // get the index pposition of the two target layers
    const layerIndexA = findArrayIndexByElementId(layers, swapA);
    const layerIndexB = findArrayIndexByElementId(layers, swapB);
    // swap em
    return changeArrayElementIndex(layers, layerIndexA, layerIndexB);

}

const renameLayer = (layers, layerId, newName) => {
    // grab the target layer to be renamed, then rename it
    const renamedLayer = { ...findArrayElementById(layers, layerId) };
    renamedLayer.name = newName;

    // reduce current layers, injecting new one where id's match up
    return layers.reduce((arr, layer) => {
        arr.push(layer.id === layerId ? renamedLayer : layer);
        return arr;

    }, [])
}

/*
========================================================================================
    GETTERS
========================================================================================
*/

export const timelineGetLayers = (state) => {
    return state.timeline.layers;
}

export const timelineGetFrameCount = (state) => {
    return state.timeline.frame_count;
}

export const timelineGetSelectedFrame = (state) => {
    return state.timeline.selected_frame;
}

// EXPORT

export default TimelineReducer;
