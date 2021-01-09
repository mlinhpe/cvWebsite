import React, { Component } from 'react';
import { Tab } from '../components/Tab';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    renderTab(tabName, cN, section) {
        return <Tab value={tabName} className={cN} section={section}/>;
    }
    
    render() {
        return (
            <div className="Header">
                {this.renderTab("Home", "Tab", "#home_section")}
                {this.renderTab("About", "Tab", "#about_section")}
                {this.renderTab("Resume", "Tab", "#resume_section")}
                {this.renderTab("Works", "Tab", "#works_section")}
                {this.renderTab("Contact", "Tab", "#contact_section")}
            </div>
        );
    }
}

export {
    Header
}