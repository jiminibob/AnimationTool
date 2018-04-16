// import magical things
import React, { Component } from 'react';

/*
================================================================================
    base window component for each 'window' in app
================================================================================
*/

class WindowPanel extends Component {

    constructor() {
        super();
    }

    /*
    ================================================================================
       element creation
    ================================================================================
    */

    createContentElements(content) {

        // component accepts an array of created elements ( probably react com ponents)
        // attach them to content part of window
        return content.reduce((arr, item, index) => {

            arr.push(this.renderContent(item, index));
            return arr;

        }, [])
    }

    /*
    ================================================================================
       rendering
    ================================================================================
    */

    render() {


        const content = Array.isArray(this.props.content) ? this.createContentElements(this.props.content) : this.renderContent(this.props.content);

        return (
            <div className={"window " + this.props.className} >
                <div className="window-title">
                    {this.props.title}
                </div>


                <div className="window-content">
                    {content}
                </div>


                <div className="window-footer">
                    {this.props.footerContent !== false && this.props.footerContent}
                </div>
            </div>
        );

    }

    renderContent(content, key) {

        // element can be set to flex if desired
        return (
            <div key={key} className={"window-section " + (content.flex === true ? 'flex' : '')}>
                {content.element}
            </div>
        )

    }

}

/*
================================================================================
    hook up desired props
================================================================================
*/

WindowPanel.defaultProps = {
    title: "",
    content: false,
    footerContent: false
}

export default WindowPanel;

