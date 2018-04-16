// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';

// constants
import { DRAG_TYPE } from 'constants/AppConstants';

// methods
import { timelineSwapLayers, timelineSelectFrame, timelineSetLayerName } from 'store/timeline/TimelineActions';

// components
import EditableLabel from 'components/input/EditableLabel';

// class
class TimelineLayer extends Component {

    constructor() {

        super();

        // bind some methods
        this.bindedHandleUpdateLayerName = this.handleUpdateLayerName.bind(this);

        // grab ref to dom node for dragging
        this.domNode = null;

        this.layerClassMap = {
            isDragging: 'dragging'
        }

    }

    /*
    ================================================================================
       user actions
    ================================================================================
    */

    handleUpdateLayerName(value) {
        // user is changing layer name vide EditLabel component
        this.props.timelineSetLayerName(this.props.layer_id, value);
    }

    /*
    ================================================================================
       rendering
    ================================================================================
    */

    render() {

        const { connectDragSource, connectDropTarget, isDragging, isOver } = this.props;
        return connectDragSource(connectDropTarget(this.renderLayer(isDragging ? 'dragging' : '')));

    }


    renderLayer(classNames) {

        return (

            <div className={'layer ' + classNames} ref={(ref) => { this.domNode = ref }}  >

                <div className="label-nav">
                    <EditableLabel onUpdate={this.bindedHandleUpdateLayerName} value={this.props.layer_name} />
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

    index: 0,
    layer_id: false,
    layer_name: ''

}

/*
================================================================================
    hook up to redux DnD
================================================================================
*/

const TimelineLayerTarget = {

    hover(props, monitor, component) {

        const dragIndex = monitor.getItem().index;
        const dragID = monitor.getItem().layer_id;
        const hoverID = props.layer_id;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragID === hoverID) {
            return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = component.domNode.getBoundingClientRect()

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        // Determine mouse position
        const clientOffset = monitor.getClientOffset()

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top


        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        // Time to actually perform the action
        props.timelineSwapLayers(dragID, hoverID)
        monitor.getItem().index = hoverIndex;

    }
};


const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

// DD setup
const TimelineLayerSource = {
    beginDrag(props) {

        // props.timelineSelectFrame( props.layer_id );

        return {
            layer_id: props.layer_id,
            layer_name: props.layer_name,
            layer_selected: false
        };
    }
};

let dd = DropTarget(DRAG_TYPE.TIMELINE_LAYER, TimelineLayerTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
}))(TimelineLayer);

dd = DragSource(DRAG_TYPE.TIMELINE_LAYER, TimelineLayerSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(dd);

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
        timelineSwapLayers: (layer_a_id, layer_b_id) => { dispatch(timelineSwapLayers(layer_a_id, layer_b_id)) },
        timelineSelectFrame: (layer, frame) => { dispatch(timelineSelectFrame(layer, frame)) },
        timelineSetLayerName: (layer_id, name) => { dispatch(timelineSetLayerName(layer_id, name)) },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(dd);
