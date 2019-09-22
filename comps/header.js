Vue.component('page-header', {
    props: {
        pages: Array,
        currentPage: String
    },
    data: function () {
        return {
        }
    },
    methods: {
        getButtonColor: function (page) {
            if (this.currentPage == page.name)
                return 'blue'
            else
                return 'white'
        },
        getTextColor: function (page) {
            if (this.currentPage == page.name)
                return 'white'
            else
                return 'black'
        },
        changePage: function (page) {
            this.$emit("clicked", page.name)
        }
    },
    template:
        `<div class=page-header>
            <div class=my-name>Alexander Shiveley<br>Portfolio</div>
            <div class=header-buttons>
            <span class=header-button v-for="(page, index) in pages">
                <header-page-button :page="page" :style="{backgroundColor: getButtonColor(page), color: getTextColor(page)}" v-on:click.native="changePage(page)"/>
            </span>
            </div>
        </div>`
})