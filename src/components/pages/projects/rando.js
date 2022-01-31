import React from 'react';
import randoUI1 from '../../../images/randoUI1.png';
import randoUI2 from '../../../images/randoUI2.png';
import randoUI3 from '../../../images/randoUI3.png';
import randoDocs from '../../../images/randoDocs.PNG';
import randoff13 from '../../../images/randoff13.png';
import ImageScroller from '../../imagescroller';

const images = [
    { original: randoUI1 },
    { original: randoUI2 },
    { original: randoUI3 },
    { original: randoDocs },
    { original: randoff13 }
];

export default class ProjectRando extends React.Component {

    render() {
        return (
            <div>
                <h3><span class="material-icons">casino</span>Game Randomizers</h3>
                <h4>Personal Project (October 2018 - Present)</h4>
                <p><b>Technical Skills:</b> C++, C#, .NET Framework/Core, WinForms, WPF, Reverse Engineering, Data Encoding/Decoding, SQLite, Debugging</p>
                <h5>Source Code (Repos under profile used for game projects):</h5>
                <ul>
                    <li><a href="https://github.com/Bartz24/FF12Randomizer" target="_blank" rel="noreferrer">https://github.com/Bartz24/FF12Randomizer</a></li>
                    <li><a href="https://github.com/Bartz24/FF13Randomizer" target="_blank" rel="noreferrer">https://github.com/Bartz24/FF13Randomizer</a></li>
                    <li><a href="https://github.com/Bartz24/FFModdingWPF" target="_blank" rel="noreferrer">https://github.com/Bartz24/FFModdingWPF</a></li>
                </ul>
                <p>Worked on programs that modify game data with random values in C++ and C#. Currently, the focus is on documentation for the code.</p>
                <p>Backend programs are coded in C# and using WPF, originally C++ with WinForms. The program runs other tools to extract the files, and then decode, modify, and encode data.
                    Makes use of deterministic search and fill algorithms, pathfinding, probability distributions, and condition checking to ensure the game is as playable as possible</p>
                <p>The first version of the program was written in C++, as this was my first C++ project. Later versions are entirely C# in order to standardize the code instead of having equivalent code in 2 languages.
                    This was done so that later versions focus on simplifying the data decoding and encoding processes, database reading and writing, and more complex algorithms.</p>
                <p>This project so far taught me skills in basic reverse engineering and data encoding.  I also had to work with users to resolve issues they had and address any feedback.</p>
                <ImageScroller images={images}/>
            </div>
        );
    }
}