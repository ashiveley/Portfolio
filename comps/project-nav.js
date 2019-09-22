Vue.component('project-nav', {
    props: {
        projects: Array,
        currentProject: String
    },
    data: function () {
        return {
        }
    },
    methods: {
        getButtonColor: function (project) {
            if (this.currentProject == project.name)
                return 'blue'
            else
                return 'rgb(98, 98, 98)'
        },
        changeProject: function (project) {
            this.$emit("clicked", project.name)
        }
    },
    template:
        `<div class=project-nav>
            <div class=project-buttons>
                <project-button v-on:click.native="changeProject(project)" v-for="(project, index) in projects" :project="project" :style="{backgroundColor: getButtonColor(project)}"/>
            </div>
        </div>`
})