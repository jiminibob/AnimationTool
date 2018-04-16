// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// methods
import { timelineGetLayers, timelineGetSelectedFrame } from 'store/timeline/TimelineReducer';
import { timelineAddLayer } from 'store/timeline/TimelineActions';

// components
import TimelineLayer from './TimelineLayer';

// class
class TimelineLayers extends Component {

    constructor() {

        super();

        // bind some methods
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
        rendering
    ================================================================================
    */

    render() {

        return (


            <div className="timeline-layers">

                {this.props.timeline_layers.map((layer, index) => {

                    return <TimelineLayer

                        key={layer.id}
                        index={index}
                        layer_id={layer.id}
                        layer_name={layer.name}
                        layer_selected={this.props.selected_frame && this.props.selected_frame.layer === layer.id}
                        frame_count={this.props.frame_count}

                    />

                })
                }

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
        timelineAddLayer: () => { dispatch(timelineAddLayer()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineLayers);

