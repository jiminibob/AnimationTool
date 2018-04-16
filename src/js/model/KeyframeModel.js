export const KeyframeModel = (layer_id, start_frame, frame_count) => {

    // generate some mad random id to be unique ( hopefully )
    // TODO : create some kinda global thing
    const id = id || new Date().getTime() + Math.random().toFixed(10).toString().slice(2);

    // return object model with parsed data
    return {
        id: id,
        layer: layer_id,
        start_frame: start_frame || 1,
        name: 'keyframe ' + id,
        frame_count: frame_count || 1,
        asset: false,
        tween: false
    }
}