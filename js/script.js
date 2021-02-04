

//ハンバーガーメニューはここから
$('.menu-btn').on('click', function(){
    $('.header__list').toggleClass('is-active');
});

//アコーディオンメニューはここから
// display the first div by default.
$("#accordion div").first().css('display', 'block');
// Get all the links.
var link = $("#accordion a");
// On clicking of the links do something.
link.on('click', function(e) {
    e.preventDefault();
    var a = $(this).attr("href");
    $(a).slideDown('fast');
    //$(a).slideToggle('fast');
    $("#accordion div").not(a).slideUp('fast');
});

$(function() {
    $('a[href^="."]').click(function() {
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "contact" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
 });