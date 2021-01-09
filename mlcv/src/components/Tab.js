import React, { Component } from 'react';

class Tab extends Component {

    render() {
        return (
            <a className={this.props.className} href={this.props.section}> 
                {this.props.value}
            </a>
        );
    }
}

export {
    Tab
}