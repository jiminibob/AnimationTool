// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class
class ColorInput extends Component {

    constructor() {
        super();
        this.bindedHandleInput = this.handleInput.bind(this);
    }

    /*
    ================================================================================
       user actions
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

        return (
            <div className="text-input">
                {this.props.label && <p className="label">{this.props.label}</p>}
                <input type="color" value={this.props.value} onInput={this.bindedHandleInput} onChange={this.bindedHandleInput} />
            </div>
        );

    }


}

/*
================================================================================
   hook up desired props
================================================================================
*/

ColorInput.defaultProps = {
    label: false,
    value: '',
    onUpdate: false
}

export default ColorInput;

