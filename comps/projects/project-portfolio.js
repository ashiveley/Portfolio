Vue.component('project-portfolio', {
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
        <h1>Portfolio Website</h1>
        <h2 class="time">September 2019 - Present</h2>
        <p>Languages Utlitized: HTML, CSS, JavaScript, Vue, jQuery</p>
        <span>Github Source Code: <a href="https://github.com/ashiveley/PortfolioSite" target="_blank">https://github.com/ashiveley/PortfolioSite</a></span>
        <br>
        <h3>Summary:</h3>
        <p>This portfolio website was created to showcase various projects and improve my web development skills.</p>
        <br>
        <h3>About this project:</h3>
        <p>
        This website is based on the Vue framework in order to create some organization in the source code and website.
        I focused on creating a system where I had to work on the main HTML file as little as possible, and used Vue components to hold most of the logic and html layout.
        The image slideshows were created following a tutorial, and tweaked for use on this portfolio.
        </div>
        `
})