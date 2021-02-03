import React from 'react';
import ImageGallery from 'react-image-gallery';
import label1 from '../../../images/label1.jpg';
import label2 from '../../../images/label2.jpg';
import label3 from '../../../images/label3.jpg';

const images = [
    { original: label1 },
    { original: label2 },
    { original: label3 }
];

export default class ProjectMobile extends React.Component {

    render() {
        return (
            <div>
                <h3>Appliance Label Reader</h3>
                <h4>Personal Project (June 2018 - June 2019)</h4>
                <p><b>Technical Skills:</b> C# Xamarin (previously Java Android Studio), Debugging</p>
                <p>Developed a Android program prototype to read labels on an appliance to accurately read information to reduce time needed to record by hand.</p>
                <p>The project began using Java with Android Studio, with the first version mainly acting as a proof of concept. It was setup by allowing the user
                to create custom parameters to be read from the label, including Company Name, Serial Number, Model Number. The OCR was very inaccurate at this point, which led to looking for other options.</p>
                <p>Due to C# Xamarin looking more promising due to simpler APIs for the camera and text recognition, a switch was made to C# Xamarin. 
                    While this did simplify the project and improve accuracy of the OCR text reading, the project was still too complex.
                    This is mainly due to the lack of knowledge of managing data, and lack of knowledge with mobile.</p>
                <p>This project was a good introduction to mobile development, but also taught me how little I knew about data management.</p>
                <p>Looking back, this project was developed using a waterfall-like methedology, instead of one more Agile, which is part of what made this project more difficult.</p>
                <ImageGallery items={images} showThumbnails={false} autoPlay={true} showPlayButton={false} slideInterval={10000} />
            </div>
        );
    }
}