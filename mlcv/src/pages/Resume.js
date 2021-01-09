import React, { Component } from 'react';
import { ResumeSkill } from '../components/ResumeSkill';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    renderSkill(i, cN, skill) {
        return <ResumeSkill value={i} className={cN} skill={skill}/>
    }
    
    render() {
        return (
            <div className="Resume">
                <div className="Title">
                    Resume
                </div>
                <div className="ResumeSection">
                    <div className="ResumeTitleField">
                        <div className="ResumeTitle">Education</div>
                    </div>
                    <div className="ResumeTextField">
                        <div className="ResumeSubTitle">University</div><br></br>
                        <div className="ResumeText">B.Sc. Business Administration, LMU (2014)</div><br></br>
                        <div className="ResumeText">B.Sc. Computational Linguistics, LMU (2017)</div><br></br>
                        <div className="ResumeText">M.Sc. Computer Science, LMU (tba)</div><br></br>
                    </div>
                </div>

                <div className="ResumeSection">
                    <div className="ResumeTitleField">  
                        <div className="ResumeTitle">Work</div>
                    </div>
                    <div className="ResumeTextField">
                        <div className="ResumeSubTitle">EQS Group AG</div><br></br>
                        <div className="ResumeText">Working Student, Backend Developer (May 2017 - Sept. 2017)</div><br></br>
                        <div className="ResumeSubTitle">gutefrage.net</div><br></br>
                        <div className="ResumeText">Working Student, Data Engineer (Oct. 2017 - Mar. 2018)</div><br></br>
                        <div className="ResumeSubTitle">ProsiebenSat1 Tech-Solutions GmbH</div><br></br>
                        <div className="ResumeText">Data Engineer (Apr. 2018 - now)</div><br></br>
                    </div>
                </div>

                
                <div className="ResumeSection">
                    <div className="ResumeTitleField">
                        <div className="ResumeTitle">Skills</div>
                    </div>
                    <div className="ResumeTextField">
                        {this.renderSkill("50", "ResumeSkill", "Scala")}<br></br>
                        {this.renderSkill("20", "ResumeSkill", "Python | NLP")}<br></br>
                        {this.renderSkill("45", "ResumeSkill", "SQL")}<br></br>
                        {this.renderSkill("25", "ResumeSkill", "Java")}<br></br>
                        {this.renderSkill("10", "ResumeSkill", "JavaScript | CSS | HTML")}<br></br>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    Resume
}