// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class
class TimelineLayer extends Component {

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

            <div className={'layer ' + (isDragging ? 'dragging' : '')} >

                <div className="label-nav">
                    <div className="label">{this.props.layer_name}</div>
                    <div className="nav"></div>
                </div>

            </div>

        )

    }


}

/*
================================================================================
    hook up desired props
================================================================================
*/

TimelineLayer.defaultProps = {
    layer_name: '',
    isDragging: false
}

export default TimelineLayer;

