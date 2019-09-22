Vue.component('project-other', {
    props: {
    },
    data: function () {
        return {
            images: []
        }
    },
    template:
        `
        <div class="project-info">
        <h1>Minecraft Mods</h1>
        <h2 class="time">March 2016 - Present</h2>
        <p>Languages Utlitized: Java</p>
        <span>Github Source Codes: (Repository under profile used for game projects)<br><a href="https://github.com/Bartz24/VaryingMachina" target="_blank">https://github.com/Bartz24/VaryingMachina</a></span>
        <br><span><a href="https://github.com/Bartz24/SkyResources" target="_blank">https://github.com/Bartz24/SkyResources</a></span>
        <br><span><a href="https://github.com/Bartz24/VoidIslandControl" target="_blank">https://github.com/Bartz24/VoidIslandControl</a></span>
        <br><span><a href="https://github.com/Bartz24/UsefulNullifiers" target="_blank">https://github.com/Bartz24/UsefulNullifiers</a></span>
        <br><span><a href="https://github.com/Bartz24/ExternalTweaker" target="_blank">https://github.com/Bartz24/ExternalTweaker</a></span>
        <br>
        <h3>Summary:</h3>
        <p>My first major introduction to Java through the use of the Forge API for the Java Version of Minecraft. Working on these mods allows me to improve my skills in Java, version control through github, managing major game updates, and using APIs.
Although some of these projects were started years ago, Varying Machina is a current project where the intent is to be relatively modular (for a Minecraft mod) and to be a base for rewriting some of my other mods.
        </p>

        <h1>Unity3D</h1>
        <h2 class="time">2017 - Present</h2>
        <p>Languages Utlitized: Unity, C#</p>
        <h3>Summary:</h3>
        <p>Unity3D was an tool for me where a main focus was to improve my object oriented programming, algorithms, and simulating physics.  This was my first introduction to concepts such as vectors and pathfinding.
        I have also been recently experimenting with machine learning through neural networks with Unity3D.
        </p>
        </div>
        `
})