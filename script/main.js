$(document).ready(function () {
    // $("body").fadeOut();
    $("body").fadeIn(2000);
    
    var cfs = false
    $(".menu .fa-search").click(function () {
        $(".menu input").toggleClass("show_sreach");
        $(this).toggleClass("fa-search", 1000, "easeOutSine");
        $(this).toggleClass("fa-times", 1000, "easeOutSine");
    });

    // tabbed content
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        var bkImgUrl = $(this).attr("bk-img-url");
        console.log(bkImgUrl);
        $("#" + activeTab).fadeIn();
        $("#home").css({"background":"url("+bkImgUrl+") no-repeat","background-size":"cover"});
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
    $('ul.tabs li').last().addClass("tab_last");

    // slider
    $('.one-slide').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        margin: 14,
        responsive: {
            1000: {
                items: 1
            }
        }
    });
    $('.two-slide').owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        margin: 14,
        responsive: {
            1000: {
                items: 2
            }
        }
    });
    $('.four-slide').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        nav: true,
        margin: 14,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.free-slide').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        margin: 14,
        responsive: {
            0: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // sldier
});