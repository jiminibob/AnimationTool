export const TimelineKeyframeModel = (layer_id, frameIndex, frameCount) => {

    // generate some mad random id to be unique ( hopefully )
    // TODO : create some kinda global thing
    const id = id || new Date().getTime() + Math.random().toFixed(10).toString().slice(2);

    // return object model with parsed data
    return {
        id: id,
        layer: layer_id,
        frame: frameIndex || 1,
        name: 'keyframe ' + id,
        frames: frameCount || 1,
        asset: false,
        tween: false
    }
}