import React from 'react';
import gripperFinal from '../../../images/gripperFinal.jpg';
import gripperPoster from '../../../images/gripperPoster.png';
import ImageScroller from '../../imagescroller';

const images = [
    { original: gripperFinal },
    { original: gripperPoster }
];

export default class ProjectGripper extends React.Component {

    render() {
        return (
            <div>
                <h3><span class="material-icons">accessibility</span>Gripper for Individuals with Limited Mobility</h3>
                <h4>Honors Experience (January 2019 - May 2019)</h4>
                <p><b>Technical Skills:</b> C++ for Arduino, Engineering Design Process, Debugging</p>
                <p>Worked with a team focusing on the design process of prototyping a gripper utilizing
        an Arduino and laser-cut parts.</p>
                <p>The main focus of this honors project was to go through the engineering process in depth.
                This often resulted in going back to previous steps of the process to rework an idea to better suit the
                target group's needs, or when a technical problem was reached.
                I was involved in early stages of defining the problem, and designing some of the mechanical and electrical systems, prototyped with Lego gears and an Arduino.
        Although the code was simple, the electrical system was a challenge as none on the team were familiar with circuits.</p>
                <p>One major realization from this project for me is the importance of the design process.
                Although it felt as if the project was a mess at the time, we were able to focus on our goal
                of the project.  During the showcase, one judge stated that they would have created
                tests for the prototype before designing, which occurred to me as a method of
                development used in the software industry (test driven development).</p>
                <ImageScroller images={images} />
            </div>
        );
    }
}