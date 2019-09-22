Vue.component('project-gripper', {
    props: {
    },
    data: function () {
        return {
            images: ['data/gripperPoster.png', 'data/gripperFinal.jpg']
        }
    },
    template:
        `
        <div class="project-info">
        <h1>Gripper for Individuals with Limited Mobility</h1>
        <h2 class="time">January 2019 - May 2019</h2>
        <p>Languages Utlitized: C++ for Arduino</p>
        <br>
        <h3>Summary:</h3>
        <p>Worked with a team focusing on the design process of prototyping a gripper utilizing
        an Arduino and laser-cut parts.</p>
        <br>
        <h3>About this project:</h3>
        <p>The main focus of this honors project was to go through the engineering process in depth.
        This often resulted in going back to previous steps of the process to rework an idea to better suit the
        target group's needs, or when a technical problem was reached.
        <br>
        I was involved in early stages of defining the problem, and helping with the Arduino system, which read inputs from a joystick to turn a motor, which opened or closed the gripper.
        Although the code was simple, the electrical system was a challenge for those of us not too familiar with circuits.</p>
        One major realization from this project for me is the importance of the design process.  
        Although it felt as if the project was a mess at the time, we were able to focus on our goal 
        of the project.  During the showcase, one judge stated that they would have created 
        tests for the prototype before designing, which occurred to me as a method of 
        development used in the software industry (test driven development).
        <image-slider class="image-slider" :images="images"/>
        </div>
        `
})