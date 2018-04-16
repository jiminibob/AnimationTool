// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// methods
import { timelineGetLayers, timelineGetFrameCount } from 'store/timeline/TimelineReducer';
import { timelineAddLayer } from 'store/timeline/TimelineActions';

// components
import TimelineLayers from './TimelineLayers';
import TimelineFrames from './TimelineFrames';
import WindowPanel from 'components/_base/WindowPanel';

// class
class AppLayout extends Component {

    constructor() {

        super();

        this.bindedHandleAddLayer = this.handleAddLayer.bind(this);


    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    handleAddLayer() {
        this.props.timelineAddLayer();
    }

    /*
    ================================================================================
        element creation
    ================================================================================
    */

    createWindowContent() {

        // we are injecting content into the window component,
        // it requires an array of object data to know how to treat each section 
        return [

            { flex: true, element: this.renderLayers() },

        ]

    }

    /*
    ================================================================================
       rendering
    ================================================================================
    */

    render() {

        return (

            <WindowPanel

                title="timeline"
                className="timeline"
                content={this.createWindowContent()}
                footerContent={this.renderFooterContent()}

            />

        );

    }

    renderLayers() {
        return (

            <div className="timeline">
                <div className="layer-split">
                    <TimelineLayers />
                </div>
                <div className="frame-split">
                    <TimelineFrames />
                </div>
            </div>
        )
    }

    renderFooterContent() {
        return (
            <button onClick={() => this.props.timelineAddLayer()} > add layer  </button>
        )
    }


}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state) {
    return {
        timeline_layers: timelineGetLayers(state),
        frame_count: timelineGetFrameCount(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        timelineAddLayer: () => { dispatch(timelineAddLayer()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);

