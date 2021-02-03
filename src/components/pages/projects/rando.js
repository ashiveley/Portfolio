import React from 'react';
import ImageGallery from 'react-image-gallery';
import randoUI1 from '../../../images/randoUI1.png';
import randoUI2 from '../../../images/randoUI2.png';
import randoUI3 from '../../../images/randoUI3.png';
import randoDocs from '../../../images/randoDocs.PNG';
import randoff13 from '../../../images/randoff13.png';

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
                <h3>Game Randomizers</h3>
                <h4>Personal Project (October 2018 - Present)</h4>
                <p><b>Technical Skills:</b> C++, C#, Reverse Engineering, Data Encoding/Decoding, Debugging</p>
                <h5>Source Code (Repos under profile used for game projects):</h5>
                <ul>
                    <li><a href="https://github.com/Bartz24/FF12Randomizer" target="_blank" rel="noreferrer">https://github.com/Bartz24/FF12Randomizer</a></li>
                    <li><a href="https://github.com/Bartz24/FF13Randomizer" target="_blank" rel="noreferrer">https://github.com/Bartz24/FF13Randomizer</a></li>
                </ul>
                <p>Worked on programs that modify game data with random values in C++ and C#. Currently, the focus is on documentation for the code.</p>
                <p>Backend programs are coded in C++, and later C#, with a UI created using C# WinForms. The program runs other tools to extract the files, and then decode, modify, and encode data.
                    Makes use of pathfinding and other algorithms for grids, probability distributions, and condition checking to ensure the game is as playable as possible</p>
                <p>The first version of the program was written in C++, as this was my first C++ project. Later versions are entirely C# in order to standardize the code instead of having equivalent code in 2 languages.
                    This was done so that later versions focus on simplifying the data decoding and encoding processes and more complex logic algorithms.</p>
                <p>This project so far taught me skills in basic reverse engineering and data encoding.  I also had to work with users to resolve issues they had and address any feedback.</p>
                <ImageGallery items={images} showThumbnails={false} autoPlay={true} showPlayButton={false} slideInterval={10000} />
            </div>
        );
    }
}