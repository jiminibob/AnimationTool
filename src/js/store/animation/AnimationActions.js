import AnimationReducer from './AnimationReducer';

export const setAnimationDuration = (value) => {
    return {
        type: AnimationReducer.SET_DURATION,
        payload: value
    }
}

export const setAnimationWidth = (value) => {
    return {
        type: AnimationReducer.SET_WIDTH,
        payload: value
    }
}

export const setAnimationHeight = (value) => {
    return {
        type: AnimationReducer.SET_HEIGHT,
        payload: value
    }
}

export const setAnimationStageColour = (value) => {
    return {
        type: AnimationReducer.SET_STAGE_COLOUR,
        payload: value
    }
}

export const setAnimationLoop = (value) => {
    return {
        type: AnimationReducer.SET_LOOP_ANIMATION,
        payload: value
    }
}

export const setAnimationLoopCount = (value) => {
    return {
        type: AnimationReducer.SET_LOOP_COUNT,
        payload: value
    }
}