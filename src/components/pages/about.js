import React from 'react';
import picture from '../../images/picture.png';
import resume from '../../resume.pdf';
import { Link } from "react-router-dom";

export default class About extends React.Component {
    render() {
        return (
            <div class="selectablecontent">
                <div class="content">
                    <h2><span class="material-icons">perm_identity</span>About</h2>
                    <img src={picture} alt="Profile" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                    <p>Hi! I'm Alexander Shiveley, a third-year majoring in Computer Science and minoring in Physics at the University of Cincinnati where I have completed 2 co-ops. Coding has been an interest of mine ever since middle school, where I started by making small games. Since then I have worked on larger projects and more recently started taking challenging but interesting classes like Data Analysis, Data Encoding, and Algorithms.  I've also been enjoying the more advanced Physics classes so far.</p>
                    <p>At UC, I joined Cubecat's Catise program to launch a high altitude balloon, where I worked on the data collection computer and then assisted at the launch. To say the least, the launch failed due to a simple mistake of not tying a knot. It's always the small things!</p>
                    <p>I am from Cincinnati, Ohio and went to Fairfield High School.  At Fairfield, I was a member of the engineering club and tutored others in Math, Science, and even German.   I was also part of the winning team at the University of Dayton hosted Math Competition in Spring 2018!</p>
                    <hr/>
                    <h2><span class="material-icons">code</span>Co-ops and Projects</h2>
                    <p>So far at UC I have completed 2 co-ops in software engineering. These co-ops helped me not only develop technical skills, but also non-technical skills.</p>
                    <span>Aditional information on co-ops:</span> <Link to="/coop">Link</Link>
                    <br />
                    <br />
                    <p>Side projects were what got me into programming back in middle school.  Since then, I have worked on some larger projects and been involved in a couple at UC as well.</p>
                    <span>Aditional information on projects:</span> <Link to="/projects">Link</Link>
                    <hr/>
                    <h2><span class="material-icons">emoji_objects</span>Reflection and Career Goal</h2>
                    <p>So far, my time at UC has been a challenge but rewarding through my classes and co-ops.
                    I've gained experience on co-ops both technically with software development, debugging, and databases along with professionally through daily meetings, presentations, and technical writing.
                    I was expecting co-ops to be extremely beneficial, but after doing a couple I started to realize how accelerated learning could be in the workplace.
                    If I was to start over from the start of my time at UC, I wish that I gained some work experience early on as the benefits from that carry into the classes as well. 
                    </p>
                    <p>Moving forward, I hope to continue to learn more about software engineering along with starting to explore areas of research and the future of computer science technology.</p>
                    <hr/>
                    <h2><span class="material-icons">email</span>Contact Info</h2>
                    <p><b>Email: </b>shivelat@mail.uc.edu</p>
                    <hr/>
                    <h2><span class="material-icons">feed</span>Resume</h2>
                    <a href={resume} download>Download Resume</a>
                    <br />
                    <br />
                    <embed download src={resume} width="80%" height="900px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                </div>
            </div>
        );
    }
}