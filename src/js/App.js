// grab libs
import React from 'react';
import { render, } from 'react-dom';
import { Provider } from 'react-redux';

// grab base layout and store
import AppLayout from 'containers/_base/AppLayout';
import ConfigureStore from 'store/ConfigureStore.js';

// keyboard listener for keyboard shortcuts
// TODO : make this a self contained class
import { registerKeyDown, registerKeyUp } from 'store/keyboard/KeyboardActions'
import { isKeyDown } from 'store/keyboard/KeyboardReducer'

export default () => {

    // create the store
    const store = ConfigureStore();

    // render app entry
    const doRender = () => {
        render(
            <Provider store={store}>
                <AppLayout></AppLayout>
            </Provider>,
            document.getElementById('app')
        );
    };

    // listen for keyboard
    let lastKeydown = false;
    let lastkeyup = false;
    window.addEventListener("keydown", (e) => {
        if (e.keyCode != lastKeydown) {
            lastKeydown = e.keyCode;
            store.dispatch(registerKeyDown(e.keyCode));
        }
    })

    window.addEventListener("keyup", (e) => {
        store.dispatch(registerKeyUp(e.keyCode));
    })


    doRender();

}