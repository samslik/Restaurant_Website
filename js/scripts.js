/**
 * Created by ania on 2018-01-12.
 */
var main = function() {
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
$(document).ready(main);