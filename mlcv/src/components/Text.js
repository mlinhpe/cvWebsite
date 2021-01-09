import React, { Component } from 'react';

class Text extends Component {
    render() {
        return (
            <div className={"Text " + this.props.className}> 
                {this.props.value}
            </div>
        );
    }
}

export {
    Text
}