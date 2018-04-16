// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// methods
import { selectionClear } from 'store/selection/SelectionActions';
import { getAnimationWidth, getAnimationHeight, getAnimationAspect, getAnimationStageColour } from 'store/animation/AnimationReducer';

// components
import AnimationSettings from 'containers/settings/AnimationSettings';

// class
class Animation extends Component {

    constructor() {

        super();

        // bind some methods
        this.bindedHandleClearSelection = this.handleClearSelection.bind(this);
    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    // user can clear any selection by selection the animation stage
    handleClearSelection() {
        this.props.selectionClear();
    }

    /*
    ================================================================================
        element creation
    ================================================================================
    */

    getViewportStyle() {

        // view port style is determined by animation settings
        // TODO : will also be positioned and scaled according to user settings
        return { background: this.props.stageColour, width: this.props.width + "px", height: this.props.height + "px" };
    }

    /*
    ================================================================================
        rendering
    ================================================================================
    */

    render() {

        return (

            <div className="window animation" >

                <div className="content" onClick={this.bindedHandleClearSelection}>
                    <div className="viewport" style={this.getViewportStyle()} >
                    </div>

                </div>

                <div className="window-section footer-nav"> </div>

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
        width: getAnimationWidth(state),
        height: getAnimationHeight(state),
        aspect: getAnimationAspect(state),
        stageColour: getAnimationStageColour(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        selectionClear: () => dispatch(selectionClear())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Animation);

