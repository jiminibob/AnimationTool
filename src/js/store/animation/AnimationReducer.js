
/*
========================================================================================
    BASE
========================================================================================
*/

const initState = {
    duration: 15000,
    width: 640,
    height: 480,
    aspect: 480 / 640,
    stageColour: '#FFFFFF',
    borderColour: '#000000',
    loopAnimation: true,
    loopCount: 0
};


/*
========================================================================================
    UPDATE
========================================================================================
*/

const AnimationReducer = (state = initState, action) => {

    let nextState = {};

    switch (action.type) {

        case AnimationReducer.SET_DURATION:
            nextState.duration = action.payload;
            return { ...state, ...nextState }

        case AnimationReducer.SET_WIDTH:
            nextState.width = action.payload;
            nextState.aspect = state.height / nextState.width;
            return { ...state, ...nextState }

        case AnimationReducer.SET_HEIGHT:
            nextState.height = action.payload;
            nextState.aspect = nextState.height / state.width;
            return { ...state, ...nextState }

        case AnimationReducer.SET_STAGE_COLOUR:
            nextState.stageColour = action.payload;
            return { ...state, ...nextState }

        case AnimationReducer.SET_BORDER_COLOUR:
            nextState.borderColour = action.payload;
            return { ...state, ...nextState }

        case AnimationReducer.SET_LOOP_ANIMATION:
            nextState.loopAnimation = action.payload;
            return { ...state, ...nextState }

        case AnimationReducer.SET_LOOP_COUNT:
            nextState.loopCount = action.payload;
            return { ...state, ...nextState }
    }

    return state;
};

/*
========================================================================================
    CONSTANTS
========================================================================================
*/

AnimationReducer.SET_DURATION = 'AnimationReducer.SET_DURATION';
AnimationReducer.SET_WIDTH = 'AnimationReducer.SET_WIDTH';
AnimationReducer.SET_HEIGHT = 'AnimationReducer.SET_HEIGHT';
AnimationReducer.SET_STAGE_COLOUR = 'AnimationReducer.SET_STAGE_COLOUR';
AnimationReducer.SET_BORDER_COLOUR = 'AnimationReducer.SET_BORDER_COLOUR';
AnimationReducer.SET_LOOP_ANIMATION = 'AnimationReducer.SET_LOOP_ANIMATION';
AnimationReducer.SET_LOOP_COUNT = 'AnimationReducer.SET_LOOP_COUNT';

/*
========================================================================================
    GETTERS
========================================================================================
*/

export const getAnimationDuration = (state) => {
    return state.animation.duration;
}
export const getAnimationWidth = (state) => {
    return state.animation.width;
}
export const getAnimationHeight = (state) => {
    return state.animation.height;
}
export const getAnimationAspect = (state) => {
    return state.animation.aspect;
}
export const getAnimationStageColour = (state) => {
    return state.animation.stageColour;
}
export const getAnimationLoop = (state) => {
    return state.animation.loopAnimation;
}

export const getAnimationLoopCount = (state) => {
    return state.animation.loopCount;
}


// EXPORT

export default AnimationReducer;