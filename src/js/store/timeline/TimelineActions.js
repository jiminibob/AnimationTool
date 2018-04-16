import TimelineReducer from './TimelineReducer';

export const timelineAddLayer = () => {
    return {
        type: TimelineReducer.ADD_LAYER
    }
}

export const timelineSwapLayers = (layer_a_id, layer_b_id) => {
    return {
        type: TimelineReducer.SWAP_LAYERS,
        payload: { layer_a_id: layer_a_id, layer_b_id: layer_b_id }
    }
}

export const timelineSetLayerName = (layer_id, name) => {
    return {
        type: TimelineReducer.RENAME_LAYER,
        payload: { layer_id, name }
    }
}