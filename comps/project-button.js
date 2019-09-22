Vue.component('project-button', {
    props: {
        project: Project
    },
    data: function () {
        return {
        }
    },
    template:
        `<span class=project-button>{{project.name}}</span>`
})