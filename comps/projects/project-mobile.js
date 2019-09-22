Vue.component('project-mobile', {
    props: {
    },
    data: function () {
        return {
            images: ['data/label1.jpg', 'data/label2.jpg', 'data/label3.jpg']
        }
    },
    template:
        `
        <div class="project-info">
        <h1>Appliance Label Reader</h1>
        <h2 class="time">June 2018 - Present</h2>
        <p>Languages Utlitized: C# Xamarin (previously Java Android Studio)</p>
        <br>
        <h3>Summary:</h3>
        <p>Android program being written to read labels on an appliance to accurately read information to reduce time needed to record by hand.</p>
        <br>
        <h3>About this project:</h3>
        <p>The project began using Java with Android Studio, with the first version mainly acting as a proof of concept. It was setup by allowing the user
        to create custom parameters to be read from the label, including Company Name, Serial Number, Model Number.  It then used these in succession to let the user
        select the text from the label with a box tool allowing the OCR to focus on that section.  The OCR was very inaccurate at this point, which led to looking for other options.
        <br>
        Due to C# Xamarin looking more promising due to simpler APIs for the camera and text recognition, a switch was made to C# Xamarin.
        The application is currently split into 2 parts under the C# Xamarin rewrite.
        The first being the data handler, where the user can create parameters as before and the data is stored in a SQL database for each label read.
        The second is the label reader using a Google API which handles the camera implementation and OCR. Each parameter is read at the same time, and the user only has to tell the application which text area on the label is each parameter.
        Currently unimplemented, but it will act similar to a check scanner where the label will be lined up with a box and then the data is read.
        The user has the option to manually correct the information read from the label.        
        <image-slider class="image-slider" :images="images"/>
        </div>
        `
})