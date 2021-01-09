import React, { Component } from 'react';

class DownloadButton extends Component {

    render() {
        return (
            // on click route to endpoint /download-cv
            <button type="button" className={this.props.className} onClick={() => { document.location.href='/download-cv';}}> 
                {this.props.value}
            </button>
        );
    }
}

export {
    DownloadButton
}