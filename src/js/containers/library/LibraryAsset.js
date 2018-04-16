// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// methods
import { renameAsset } from 'store/assets/AssetsActions';

// components
import EditableLabel from 'components/input/EditableLabel';

// class
class LibraryAsset extends Component {

    constructor() {

        super();

        this.bindedHandleRenameAsset = this.handleRenameAsset.bind(this);
        this.bindedHandleSelect = this.handleSelected.bind(this);
    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    // user has clicked on the asset
    handleSelected() {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.asset.id);
        }
    }

    // user is renaming the asset via editable label component
    handleRenameAsset(value) {
        this.props.renameAsset(this.props.asset.id, value)
    }

    /*
    ================================================================================
       rendering
    ================================================================================
    */

    render() {

        if (!this.props.asset)
            return null;

        return (

            <div className={"library-asset " + (this.props.selected ? 'selected' : '')} onClick={this.bindedHandleSelect} >
                <div className="asset-thumbnail"><img src={this.props.asset.src} /></div>
                <div className="asset-name">
                    <EditableLabel value={this.props.asset.name} onUpdate={this.bindedHandleRenameAsset} />
                </div>
            </div>

        );

    }

}

/*
================================================================================
    hook up desired props
================================================================================
*/

LibraryAsset.defaultProps = {
    asset: false,
    selected: false,
    onSelect: false
}


function mapStateToProps(state) {
    return {

    };
}
function mapDispatchToProps(dispatch) {
    return {
        renameAsset: (id, value) => { dispatch(renameAsset(id, value)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryAsset);

