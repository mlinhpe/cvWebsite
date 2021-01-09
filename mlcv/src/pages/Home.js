import React, { Component } from 'react';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { About } from './About';
import { Resume } from './Resume';
import { Contact } from './Contact';
import '../styles/App.css'
import '../styles/Contact.css'
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Resume.css'



class Home extends Component {
    renderText(text, cN) {
        return <Text value={text} className={cN} />;
    }



    render() {
        return (
            <div className="cv">
                <Header/>
                <section id="home_section">
                </section>
                <div className="Home">
                <div className="IntroTextField">
                    {this.renderText("Hi, I'm Mai Linh.", "IntroText")}
                </div>
                <div className="DescriptionTextField">
                    {this.renderText("Data Engineer | Scala Developer | Computational Linguistics Graduate", "DescriptionText")}
                </div>   
                </div>
            <section id="about_section">
            </section>    
            <About/>
            
            
            <section id="resume_section">
            <Resume/>
            </section>

            <section id="contact_section">
            </section>
            <Contact/>

            </div> 
        );
    }
}

export {
    Home
}
