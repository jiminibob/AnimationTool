// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// components
import Animation from 'containers/animation/Animation';
import AnimationSettings from 'containers/settings/AnimationSettings';
import Timeline from 'containers/timeline/Timeline';
import Library from 'containers/library/Library';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class AppLayout extends Component {

    constructor() {
        super();
    }

    /*
    ================================================================================
       rendering
    ================================================================================
    */

    render() {

        return (

            <div className="app-layout" >

                <div className="uppersection">

                    <Animation />

                    <div className="side-panel">

                        <AnimationSettings />
                        <Library />

                    </div>
                </div>

                <Timeline />

            </div>
        );
    }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state) {
    return {

    };
}
function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(AppLayout));
