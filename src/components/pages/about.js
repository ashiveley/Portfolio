import React from 'react';
import picture from '../../images/picture.png';
import resume from '../../resume.pdf';

export default class About extends React.Component {
    render() {
        return (
            <div class="selectablecontent">
                <div class="content">
                    <h2>About</h2>
                    <img src={picture} alt="Profile"></img>
                    <p>Hi! I'm Alexander Shiveley, a sophomore majoring in Computer Science and minoring in Physics at the University of Cincinnati.
I am from Cincinnati, Ohio and went to Fairfield High School.  At Fairfield, I was a member of the engineering club and tutored others in Math, Science, and even German.   I was part of the winning team at the University of Dayton hosted Math Competition in Spring 2018!</p>
                    <p>At UC, I joined Cubecat's Catise program to (attempt to) launch a high altitude balloon, where I worked on the data collection computer and then assisted at the attempted launch, which failed due to a knot not being tied.</p>
                    <br/>
                    <p>To find info on various projects and co-ops, navigate through the top bar.</p>
                    <h3>Reflection and Career Goal</h3>
                    <p>So far, my time at UC has been a challenge but rewarding through my classes and co-ops.
                    I've gained experience on co-ops both technically with software development, debugging, and databases along with professionally through daily meetings, presentations, and technical writing.
                    I was expecting co-ops to be extremely beneficial, but after doing a couple I started to realize how accelerated learning could be when there is reason to do so.
                    If I was to start over from the start of my time at UC, I would have pushed myself to search for an internship/co-op earlier on. Classes are great, but co-ops reinforce and expand on the classes.
                    </p>
                    <p>Moving forward, I hope to continue to learn more about software engineering along with starting to explore areas of research and the future of computer science technology.</p>                    
                    <h2>Contact Info</h2>
                    <p><b>Email: </b>shivelat@mail.uc.edu</p>



                    <h2>Resume</h2>
                    <embed download src={resume} width="100%" height="100%" />
                </div>
            </div>
        );
    }
}