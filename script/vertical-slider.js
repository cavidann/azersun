$(document).ready(function () {
    var h;
    var margin;

    // $(window).on('resize', function () {
        var win = $(this);
        if (win.width() >= 1500) {

            margin = 154
            $(".vertical-nav .fa-angle-up").click(function () {
                h = $(".vertical-slider").outerHeight(true);
                margin -= h;
                if (margin >= -770) {
                    $(".vertical-move").css({ "margin-top": margin });
                } else {
                    margin += h;
                }
            });

            margin = -154;
            $(".vertical-nav .fa-angle-down").click(function () {
                h = $(".vertical-slider").outerHeight(true)
                margin += h
                if (margin <= 154) {
                    $(".vertical-move").css({ "margin-top": margin });
                } else {
                    margin -= h;
                }
            });
        }
    // })


    // $(window).on('resize', function () {
        var win = $(this);
        if (win.width() <= 1500) {
            margin = 0
            $(".vertical-nav .fa-angle-up").click(function () {
                h = $(".vertical-slider").outerHeight(true);
                margin -= h;
                if (margin >= -924) {

                    $(".vertical-move").css({ "margin-top": margin });
                    console.log(margin);
                } else {
                    margin += h;
                    console.log(margin);
                }
            });


            margin = 0;
            $(".vertical-nav .fa-angle-down").click(function () {
                h = $(".vertical-slider").outerHeight(true)
                margin += h
            //     console.log(h)
                
                if (margin <308) {
                    $(".vertical-move").css({ "margin-top": margin });
                    console.log(margin);
                } else {
                    margin -= h;
                    // console.log(margin);

                }
            });
        }
    // })
});