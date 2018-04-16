// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// methods
import { uploadAsset } from 'store/assets/AssetsActions';
import { getAnimationDuration, getAnimationWidth, getAnimationHeight, getAnimationStageColour, getAnimationLoopCount, getAnimationLoop } from 'store/animation/AnimationReducer';
import { setAnimationDuration, setAnimationWidth, setAnimationHeight, setAnimationStageColour, setAnimationLoopCount, setAnimationLoop } from 'store/animation/AnimationActions';

// components
import TextInput from 'components/input/TextInput';
import ColorInput from 'components/input/ColorInput';
import CheckboxInput from 'components/input/CheckboxInput';
import WindowPanel from 'components/_base/WindowPanel';

// class
class AppLayout extends Component {

    constructor() {

        super();

        // bind some methods
        this.bindedHandleSetDuration = this.handleSetDuration.bind(this);
        this.bindedHandleSetWidth = this.handleSetWidth.bind(this);
        this.bindedHandleSetHeight = this.handleSetHeight.bind(this);
        this.bindedHandleSetStageColour = this.handleSetStageColour.bind(this);
        this.bindedHandleSetAnimationLoop = this.handleSetAnimationLoop.bind(this);
        this.bindedHandleSetLoopCount = this.handleSetLoopCount.bind(this);
    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    handleSetDuration(value) {
        this.props.setAnimationDuration(value);
    }

    handleSetWidth(value) {
        this.props.setAnimationWidth(value);
    }

    handleSetHeight(value) {
        this.props.setAnimationHeight(value)
    }

    handleSetStageColour(value) {
        this.props.setAnimationStageColour(value)
    }

    handleuploadAsset() {
        this.props.uploadAsset()
    }

    handleSetAnimationLoop(value) {
        this.props.setAnimationLoop(value);
    }

    handleSetLoopCount(value) {
        this.props.setAnimationLoopCount(value);
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

            { flex: true, element: this.renderSettingsMenu() }

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

                title="settings"
                content={this.createWindowContent()}

            />
        )

    }

    renderSettingsMenu() {
        return (
            <div className="animation-settings">
                <div className="setting"><TextInput label="duration" value={this.props.duration} onUpdate={this.bindedHandleSetDuration} /></div>
                <div className="setting"><TextInput label="width" value={this.props.width} onUpdate={this.bindedHandleSetWidth} /></div>
                <div className="setting"><TextInput label="height" value={this.props.height} onUpdate={this.bindedHandleSetHeight} /></div>
                <div className="setting"><ColorInput label="stage colour" type="color" value={this.props.stageColour} onUpdate={this.bindedHandleSetStageColour} /></div>
                <div className="setting"><CheckboxInput label="loop animation" value={this.props.loopAnimation} onUpdate={this.bindedHandleSetAnimationLoop} /></div>
                {this.props.loopAnimation === true &&

                    <div className="setting"><TextInput label="max loops" value={this.props.loopCount} onUpdate={this.bindedHandleSetLoopCount} /></div>
                }
            </div>
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
        duration: getAnimationDuration(state),
        width: getAnimationWidth(state),
        height: getAnimationHeight(state),
        stageColour: getAnimationStageColour(state),
        loopAnimation: getAnimationLoop(state),
        loopCount: getAnimationLoopCount(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setAnimationDuration: (value) => dispatch(setAnimationDuration(value)),
        setAnimationWidth: (value) => dispatch(setAnimationWidth(value)),
        setAnimationHeight: (value) => dispatch(setAnimationHeight(value)),
        setAnimationStageColour: (value) => dispatch(setAnimationStageColour(value)),
        setAnimationLoop: (value) => dispatch(setAnimationLoop(value)),
        setAnimationLoopCount: (value) => dispatch(setAnimationLoopCount(value)),
        uploadAsset: () => dispatch(uploadAsset())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);


