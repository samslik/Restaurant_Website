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

var menuHighlight = function() {
    $(".select").click(function(){
        $(".select").removeClass('selected');
        $(this).addClass('selected');
    });
};

function initMap(){
    var uluru = {lat: 52.525151, lng: 13.443371};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(document).ready(menu);
$(document).ready(faq);
$(document).ready(menuHighlight);
$(document).ready(initMap);

