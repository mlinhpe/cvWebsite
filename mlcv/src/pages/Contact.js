import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    render() {
        return (
            <div className="Contact">
                <div className="Title">
                    Contact Form
                </div>
                <form action="/mail" method="POST">
                    <div className="formSection">
                        <div className="Label">
                            Name
                        </div>
                        <input className="Input" type="text" name="name"/>
                    </div>

                    <div className="formSection">
                        <div className="Label">
                            Email
                    </div>
                        <input className="Input" type="text" name="email"/>
                    </div>

                    <div className="formSection">
                        <div className="Label">
                            Subject
                    </div>
                        <input className="Input" type="text" name="subject"/>
                    </div>

                    <div className="formSection">
                        <div className="Label">
                            Message
                        </div>
                        <input className="textarea" id="message" name="message">
                        </input>
                    </div>

                    <div className="formSection">
                        <input type="submit" value="Submit" name="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export {
    Contact
}