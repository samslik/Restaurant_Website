/**
 * Created by ania on 2018-01-12.
 */
var menu = function() {
    $('.icon-menu').click(function(){
        $('#menu,#menu-list').animate({
            left:'0px'},300);
        $('body').animate({
            left: '285px'},300);
    });
    $('#close-icon').click(function(){
        $('#menu, #menu-list').animate({
            left:'-285px'},300);
        $('body').animate({
            left:'0px'},300);
    });
};

var faq = function() {
    $('.question-container').click(function(event){
        $('.question').removeClass('current');
        $('.answer').hide();
        $(this).children('.answer').show();
        $(this).children('.question').addClass('current');
    });
};


$(document).ready(menu);
$(document).ready(faq);

