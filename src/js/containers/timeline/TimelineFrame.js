// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';

// constants
import { DRAG_TYPE } from 'constants/AppConstants';

// class
class TimelineFrame extends Component {

    constructor() {

        super();

        // grab a ref to the dom node, this will be used when dragging
        this.domNode = null;

        // bind some methods
        this.bindedHandleSelectFrame = this.handleSelectFrame.bind(this);

    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    handleSelectFrame() {
        if (this.props.onSelectFrame) { this.props.onSelectFrame(this.props.frame_id) }
    }

    /*
    ================================================================================
        rendering
    ================================================================================
    */

    render() {

        // grab drag/drop refering in props ( injected via react-dnd )
        const { connectDragSource, connectDropTarget, isDragging, isOver } = this.props;

        // set classees based on drag status
        const dragClass = isDragging ? ' dragging' : ' ';
        const dropClass = !isDragging && isOver ? ' dropzone' : ' ';

        // connect and return rendered element
        return connectDragSource(connectDropTarget(this.renderFrame(dragClass + dropClass)));

    }

    renderFrame(classname) {
        return (
            <div onClick={this.bindedHandleSelectFrame} ref={(ref) => { this.domNode = ref }} className={"layer-frame" + classname}></div>
        )
    }
}

/*
================================================================================
    hook up desired props
================================================================================
*/

TimelineFrame.defaultProps = {
    onSelectFrame: false,
    onMoveFrame: false,
    frameId: false,
    index: false
}

/*
================================================================================
    hook up to redux DnD
================================================================================
*/

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

// DD setup
const TimelineFrameSource = {
    beginDrag(props) {
        return {


        };
    }
};

const TimelineFrameTarget = {
    hover(props, monitor, component) {

        // const dragIndex     = monitor.getItem().index;
        // const dragID        = monitor.getItem().layer_id;
        // const hoverID       = props.layer_id;
        // const hoverIndex    = props.index;

        // // Don't replace items with themselves
        // if (dragID === hoverID) {
        // 	return
        // }

        // // Determine rectangle on screen
        // const hoverBoundingRect = component.domNode.getBoundingClientRect()

        // // Get vertical middle
        // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        // // Determine mouse position
        // const clientOffset = monitor.getClientOffset()

        // // Get pixels to the top
        // const hoverClientY = clientOffset.y - hoverBoundingRect.top


        // // Dragging downwards
        // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        // 	return
        // }

        // // Dragging upwards
        // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        // 	return
        // }

        // // Time to actually perform the action
        // props.timelineSwapLayers(dragID, hoverID)
        // monitor.getItem().index = hoverIndex;

    }
};

let dd = DropTarget(DRAG_TYPE.TIMELINE_FRAME, TimelineFrameTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
}))(TimelineFrame);

dd = DragSource(DRAG_TYPE.TIMELINE_FRAME, TimelineFrameSource, (connect, monitor) => ({
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


    };
}

export default connect(mapStateToProps, mapDispatchToProps)(dd);
