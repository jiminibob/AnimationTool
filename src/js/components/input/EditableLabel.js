// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class
class EditableLabel extends Component {

    constructor() {
        super();

        // bind methods
        this.bindedHandleInput = this.handleInput.bind(this);
        this.bindedHandleStartEdit = this.handleStartEdit.bind(this);
        this.bindedHandleEndEdit = this.handleEndEdit.bind(this);

        // reference dom node
        this.inputElement = null;

        // state switch control for know if should edit or not
        this.state = {
            editmode: false,
            setFocus: false
        };
    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    handleStartEdit() {
        this.setState({ editmode: true, setFocus: true });
    }

    handleEndEdit() {
        this.setState({ editmode: false, setFocus: false })
    }

    handleInput(e) {
        if (this.props.onUpdate) { this.props.onUpdate(e.currentTarget.value) }
    }

    /*
    ================================================================================
        life cycle events
    ================================================================================
    */

    componentDidUpdate() {
        if (this.state.setFocus) {
            this.inputElement.focus();
            this.inputElement.setSelectionRange(0, this.inputElement.value.length)
            this.setState({ editmode: true, setFocus: false })
        }
    }

    componentWillUnmount() {
        this.handleEndEdit();
    }

    /*
    ================================================================================
        rendering
    ================================================================================
    */

    render() {

        if (this.state.editmode === false) {

            return (<p className="label" onDoubleClick={this.bindedHandleStartEdit} >{this.props.value}</p>)

        }
        else {

            return (
                <div className="text-input">
                    <input type="text" ref={(input) => { this.inputElement = input; }} value={this.props.value} onInput={this.bindedHandleInput} onChange={this.bindedHandleInput} onBlur={this.bindedHandleEndEdit} />
                </div>
            );
        }



    }


}

/*
================================================================================
   hook up desired props
================================================================================
*/

EditableLabel.defaultProps = {
    value: '',
    onUpdate: false
}

export default EditableLabel;

