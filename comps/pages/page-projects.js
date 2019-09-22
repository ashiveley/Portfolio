Vue.component('page-projects', {
    props: {
    },
    data: function () {
        return {
            projects: [new Project("Game Randomizer", "project-rando"), new Project("Android Application", "project-mobile"), new Project("Portfolio Website", "project-portfolio"), new Project("Honors Engineering Project", "project-gripper"), new Project("Other Projects", "project-other")],
            currentProject: "",
            currentProjectComp: ""
        }
    },
    methods: {        
        changeProject: function (projectName) {
            if (this.currentProject !== projectName) {
                console.log(projectName)
                this.currentProject = projectName
                this.currentProjectComp = this.getProject(projectName).compName
                setSizes();
            }
        },
        getProject: function (name) {
            for (i = 0; i < this.projects.length; i++) {
                if (this.projects[i].name == name)
                    return this.projects[i]
            }
            return null
        }
    },
    template:
        `
        <div class="project-main">
        <project-nav @clicked="changeProject" :projects="projects" :current-project="currentProject"></project-nav>
        <div id="projectContent">
            <keep-alive>
                <component v-if="currentProjectComp!==''" :is="currentProjectComp"></component>
            </keep-alive>
        </div>
        </div>
        `
})