// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class
class TextInput extends Component {

    constructor() {
        super();

        // bind methods
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
                <input type="text" value={this.props.value} onInput={this.bindedHandleInput} onChange={this.bindedHandleInput} />
            </div>
        );

    }


}

/*
================================================================================
    hook up desired props
================================================================================
*/

TextInput.defaultProps = {
    label: false,
    value: '',
    onUpdate: false
}

export default TextInput;

