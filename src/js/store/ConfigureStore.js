// grab library stuff
import invariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

// grab main reducer
import rootReducer from './rootReducer';

// build store
const configureStore = (initialState) => {

    const loggerMiddleware = createLogger({
        collapsed: true,
        duration: true,
        timestamp: true,
    });

    const composeEnhancers = composeWithDevTools({ latency: 500 });
    const middlewares = [promiseMiddleware(), invariant(), thunkMiddleware];

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares),
        )
    );

    return store;
};

// EXPORT

export default configureStore;
