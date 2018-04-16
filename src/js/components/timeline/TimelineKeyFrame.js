// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class
class TimelineKeyFrame extends Component {

    constructor() {
        super();

        // bind methods
        this.bindedHandleInput = this.handleInput.bind(this);
    }

    /*
    ================================================================================
       user input
    ================================================================================
    */

    handleInput(e) {
        if (this.props.onUpdate) { this.props.onUpdate(e.currentTarget.value) }
    }

    /*
    ================================================================================
       rendering
    ================================================================================
    */

    render() {

        let className = "timeline-keyframe ";
        className += this.props.has_asset ? 'populated ' : '';
        className += this.props.frame_count > 1 ? 'extended ' : '';
        className += this.props.tween && this.props.has_asset ? 'tween ' : '';

        return (

            <div className={className} style={{ width: (this.props.frame_count * 10) + 'px' }} ></div>

        );

    }


}

/*
================================================================================
   hook up desired props
================================================================================
*/

TimelineKeyFrame.defaultProps = {
    has_asset: false,
    frame_count: 1,
    frame_id: false,
    tween: false
}

export default TimelineKeyFrame;

