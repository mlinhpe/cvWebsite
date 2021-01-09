import React, { Component } from 'react';

class ResumeSkill extends Component {

    render() {
        return (
            <div>
                <div className={"ResumeSkillTitle"}><br></br>
                    {this.props.skill}
                </div>
                <div className={"ResumeSkill " + this.props.className}> 
                    <div className="BarBackground" style={{width: this.props.value + "%"}}></div>
                </div>
            </div>
        );
    }
}

export {
    ResumeSkill
}