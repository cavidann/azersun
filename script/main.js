$(document).ready(function(){
    var cfs=false
    $(".menu .fa-search").click(function(){
        $(".menu input").toggleClass("show_sreach");
        $(this).toggleClass("fa-search", 1000, "easeOutSine");
        $(this).toggleClass("fa-times", 1000, "easeOutSine");
    });
});