$(function() {
    $('.carousel').carousel ( { interval: 2000});
    $('#carouselBtn').click(function(){
        if ($("#carouselBtn").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselBtn").children("i").removeClass("fa-pause");
            $("#carouselBtn").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselBtn").children("i").removeClass("fa-play");
            $("#carouselBtn").children("i").addClass("fa-pause"); 
        }
    });
    $('#reserveButton').click(function() {
        $('#reserveModal').modal('show');
    });
    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
    });
});