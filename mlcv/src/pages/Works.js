import React, { Component } from 'react';

class Works extends Component {
    
    render() {
        return (
            <div className="Works">
                <div className="Title">
                    Portfolio
                </div>
                <a href="https://github.com/mlinhpe/calculator">
                    <img src="https://i.imgur.com/S6E5CgC.jpg" className="githubThumb" alt="gitThumb" width="500" height="300"/>
                </a>
            </div>
        );
    }
}

export {
    Works
}