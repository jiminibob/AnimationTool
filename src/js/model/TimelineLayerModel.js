import { TimelineKeyframeModel } from './TimelineKeyframeModel';

export const TimelineLayerModel = () => {

    // generate some mad random id to be unique ( hopefully )
    // TODO : create some kinda global thing
    const id = id || new Date().getTime() + Math.random().toFixed(10).toString().slice(2);

    // return object model with parsed data
    return {
        id: id,
        name: 'layer' + id,
        keyframes: [new TimelineKeyframeModel(id)]
    }
}