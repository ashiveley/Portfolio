Vue.component('project-rando', {
    props: {
    },
    data: function () {
        return {
            images: ["data/randoUI1.png", "data/randoUI2.png", "data/randoUI3.png", "data/randoDocs.png"]
        }
    },
    template:
        `
        <div class="project-info">
        <h1>Final Fantasy XII Randomizer</h1>
        <h2 class="time">October 2018 - Present</h2>
        <p>Languages Utlitized: C++, C#, HTML, CSS</p>
        <span>Github Source Code: <a href="https://github.com/Bartz24/FF12Randomizer" target="_blank">https://github.com/Bartz24/FF12Randomizer</a> (Repository under profile used for game projects)</span>
        <br>
        <h3>Summary:</h3>
        <p>Coded in C++, with a UI created using C# WinForms, the program runs other tools to extract the files, and then reads the binary data, modifies the data, and then replaces the original data.<br>
        Uses pathfinding and other algorithms for grids, probability distributions, and condition checking to ensure the game is as playable as possible
        </p>
        <br>
        <h3>About this project:</h3>
        <p>This was my first C++ project, and I also wanted to get into some reverse engineering. With the compression and decompression for this game already reverse engineered out by others,
        I started with using some of the data collected from others, and using HexWorkshop, I began to look for patterns in the uncompressed data by changing potential values seen in-game.
        After I became familiar with how some of the data was stored, I started writing the program to do this itself.
        <br>
        <br>
        The program coded in C++ handles all the modifications to the game's data, aside from text which is handled by a seperately written C# program.
        It starts out by parsing flags from a string sent in a text file from the UI program, and sets the seed.  The program then calls methods to load, process, and override files or sections of files.
        When the data is loaded from the uncompressed binary files, simple data structures of a single item are used to read the binary data as mostly booleans, chars, shorts, and integers.
        Algorithms used on the 2D grids involve depth-first search, calculating distance at each point from starting point, and generating random shapes or maze-like shapes.
        This program also sends all the text changes required to another program written in C# which uses a seperate library to inject changes to text.
        <br>
        <br>
        The user interface was shortly after converted to a windows form application, rather than being handled by the C++ console application.
        The UI provides users with the options of presets, and the ability to change each individual setting to their liking and effectively change the probability distribution used or algorithm used.
        <br>
        <br>
        The program also creates documentation for players of some of the major changes made in the form of HTML.
        </p>
        As the main purpose of this project was originally to gain familiarity with C++, the focus has shifted to looking at more complex data like scripted AI for objects in the game and working to improve how much of the game's data can be changed.
        As a result, I've also been incorporating user feedback and implementing some suggestions for modifying the game's data in interesting ways.
        <image-slider class="image-slider" :images="images"/>
        </div>
        `
})