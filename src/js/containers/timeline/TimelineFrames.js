// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// methods
import { timelineGetLayers, timelineGetFrameCount, timelineGetSelectedFrame } from 'store/timeline/TimelineReducer';
import { timelineAddLayer, timelineSelectFrame, timelineAddFrame, timelineAddKeyFrame } from 'store/timeline/TimelineActions';

// components
import TimelineKeyFrame from 'components/timeline/TimelineKeyFrame';

// class
class TimelineFrames extends Component {

    constructor() {

        super();

        // bind some methods
        this.bindedHandleSelectFrame = this.handleSelectFrame.bind(this);
        this.bindedHandleAddFrame = this.handleAddFrame.bind(this);
        this.bindedHandleAddKeyFrame = this.handleAddKeyFrame.bind(this);
    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    handleSelectFrame(e) {
        let frameIndex = Math.floor((e.nativeEvent.offsetX + e.nativeEvent.target.offsetLeft) / 10);
        let layerID = e.currentTarget.getAttribute('data-layerid');
        this.props.timelineSelectFrame(parseInt(layerID), frameIndex);
    }

    handleAddFrame() {
        this.props.timelineAddFrame(this.props.selected_frame.layer, this.props.selected_frame.frame);
    }

    handleAddKeyFrame() {
        this.props.timelineAddKeyFrame(this.props.selected_frame.layer, this.props.selected_frame.frame);
    }

    /*
    ================================================================================
        rendering
    ================================================================================
    */

    render() {

        return (

            <div className="timeline-frames">

                {this.props.timeline_layers.map((item, index) => {
                    return (<div key={item.id} className="frames"></div>)
                })}

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
        timeline_layers: timelineGetLayers(state),
        selected_frame: timelineGetSelectedFrame(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        timelineAddLayer: () => { dispatch(timelineAddLayer()) },
        timelineAddFrame: (layer, frame) => { dispatch(timelineAddFrame(layer, frame)) },
        timelineAddKeyFrame: (layer, frame) => { dispatch(timelineAddKeyFrame(layer, frame)) },
        timelineSelectFrame: (frame, layer) => { dispatch(timelineSelectFrame(frame, layer)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineFrames);

