var app = new Vue({
    el: '#app',
    data: {
        currentPage: "About Me",
        pages: [new Page("About Me", "page-about"), new Page("Projects", "page-projects"), new Page("Resume", "page-resume", false)],
        currentPageComp: "page-about",
        images: [
            'https://dummyimage.com/800/ffffff/000000',
            'https://dummyimage.com/1600/ffffff/000000',
            'https://dummyimage.com/1280/000000/ffffff',
            'https://dummyimage.com/400/000000/ffffff'
        ],
        index: null
    },
    methods: {
        changePage: function (pageName) {
            if (this.currentPage !== pageName) {
                console.log(pageName)
                this.currentPage = pageName
                this.currentPageComp = this.getPage(pageName).compName
                setSizes();
            }
        },
        getPage: function (name) {
            for (i = 0; i < this.pages.length; i++) {
                if (this.pages[i].name == name)
                    return this.pages[i]
            }
            return null
        }
    },
    mounted() {
        setInterval(setSizes, 20)
    }, 
    components: {
      'gallery': VueGallery
    }
});

function setSizes() {
    var bodyHeight = $("body").height();
    var headerHeight = $(".page-header").height();
    var appHeight = $("#app").height();

    if (!app.getPage(app.currentPage).overflow) {
        $("#mainContent").height((appHeight - headerHeight-20)+"px");
    } else
        $("#mainContent").height('auto');

        $("#mainContent").css({"margin-top": (headerHeight+20) + "px"});

    if ($("#projectContent").length) {
        var navWidth = $(".project-nav").width();
        $("#projectContent").css({
            "padding-left": (navWidth + 5) + "px"
        });
    }
}

$(window).resize(function () { setSizes(); });

