// library stuff
import { combineReducers } from 'redux';

// grab all our reducers
import app from './app/AppReducer';
import animation from './animation/AnimationReducer';
import assets from './assets/AssetsReducer';
import timeline from './timeline/TimelineReducer';
import library from './library/LibraryReducer';
import selection from './selection/SelectionReducer';
import keyboard from './keyboard/KeyboardReducer';

// mash them together
const rootReducer = combineReducers({
    app,
    assets,
    animation,
    timeline,
    library,
    selection,
    keyboard
});

// export
export default rootReducer;
