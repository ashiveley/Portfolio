import React from 'react';

export default class ProjectPortfolio extends React.Component {

    render() {
        return (
            <div>
                <h3>Portfolio</h3>
                <h4>Personal Project (October 2018 - Present)</h4>
                <p><b>Technical Skills:</b> React JS, HTML, CSS (first version used Vue)</p>
                <h5>Source Code:</h5>
                <ul>
                    <li><a href="https://github.com/ashiveley/Portfolio" target="_blank" rel="noreferrer">https://github.com/ashiveley/Portfolio</a></li>
                </ul>
                <p>This version of the portfolio started in 2021 is made using React JS, with the react-image-gallery package and react-router-dom package.</p>
                <p>The first version made using Vue was my introduction to modern web development, and the switch was made to React as it seemed more powerful and simpler.</p>
                <p>This project improved my web development skills greatly, although I am still doing the basics.</p>
            </div>
        );
    }
}