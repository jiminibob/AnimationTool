// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// methods
import { isShiftKeyDown } from 'store/keyboard/KeyboardReducer';
import { getSearchFilter, getSelectedAssets, getLibraryAssets } from 'store/library/LibraryReducer';
import { setLibrarySearchFilter, selectLibraryAsset, uploadNewAsset, addToSelectedLibraryAssets } from 'store/library/LibraryActions';

// components
import TextInput from 'components/input/TextInput';
import WindowPanel from 'components/_base/WindowPanel';
import LibraryAsset from './LibraryAsset';

// class
class Library extends Component {

    constructor() {

        super();

        // bind some methods
        this.bindedHandleSearchInput = this.handleSearchInput.bind(this);
        this.bindedSelectLibraryAsset = this.handleSelectLibraryAsset.bind(this);
        this.bindedUploadNewAsset = this.handleUploadAsset.bind(this);
    }

    /*
    ================================================================================
        user actions
    ================================================================================
    */

    // user is choosing to upload an asset fromtheir file system 
    handleUploadAsset() {
        this.props.uploadNewAsset();
    }

    // user has selected an asset in the library
    handleSelectLibraryAsset(asset_id) {

        // if shift is down, user is multi selectiing
        if (this.props.shiftKeyDown) {
            this.props.addToSelectedLibraryAssets(asset_id);
        }
        else {
            this.props.selectLibraryAsset(asset_id);
        }
    }

    // user has entered in the search filter
    handleSearchInput(e) {
        this.props.setLibrarySearchFilter(e);
    }

    /*
    ================================================================================
        element creation
    ================================================================================
    */

    createWindowContent() {

        // create an array of asset elements to feed the asset window
        const assetElements = this.createAssetElements(this.props.assets);

        // we are injecting content into the window component,
        // it requires an array of object data to know how to treat each section 
        return [

            { flex: false, element: this.renderSearchBar() },
            { flex: true, element: this.renderLibraryAssets(assetElements) }

        ]

    }

    // creates the asset element needed for each available asset
    createAssetElements(assets) {

        if (assets) {
            return assets.reduce((arr, asset, index) => {
                arr.push(this.renderAsset(index, asset));
                return arr;

            }, []);
        }

        return [];
    }

    /*
    ================================================================================
        rendering
    ================================================================================
    */

    render() {

        return (

            <WindowPanel

                title="library"
                className="lbrary"
                content={this.createWindowContent()}
                footerContent={this.renderFooterContent()}

            />

        );

    }

    renderSearchBar() {
        return (<TextInput key="library-search" onUpdate={this.bindedHandleSearchInput} value={this.props.searchFilter} />)
    }



    renderFooterContent() {
        return (
            <button onClick={this.bindedUploadNewAsset} >ADD ASSET</button>
        )
    }

    renderLibraryAssets(asset_elements) {
        return (
            <div key="library-assets" className="library-assets">
                {asset_elements}
            </div>
        )
    }

    renderAsset(key, asset) {

        return (
            <LibraryAsset
                key={key}
                asset={asset}
                onSelect={this.bindedSelectLibraryAsset}
                selected={this.props.selectedAssets.includes(asset.id)}
            />
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
        assets: getLibraryAssets(state),
        searchFilter: getSearchFilter(state),
        selectedAssets: getSelectedAssets(state),
        shiftKeyDown: isShiftKeyDown(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uploadNewAsset: () => dispatch(uploadNewAsset()),
        setLibrarySearchFilter: (value) => dispatch(setLibrarySearchFilter(value)),
        selectLibraryAsset: (asset_id) => dispatch(selectLibraryAsset(asset_id)),
        addToSelectedLibraryAssets: (asset_id) => dispatch(addToSelectedLibraryAssets(asset_id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);

