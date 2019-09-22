Vue.component('header-page-button', {
    props: {
        page: Page
    },
    data: function () {
        return {
        }
    },
    template:
        `<span class=header-page-button>{{page.name}}</span>`
})