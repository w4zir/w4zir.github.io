jQuery(function () {
    jQuery('.featured-image img, .home #main a, #blogroll article img, .featured-blog-image img').hide(); //hide all the images on the page
});

var i = 0; //initialize
var int=0; //Internet Explorer Fix
jQuery(window).bind("load", function() { //The load event will only fire if the entire page or document is fully loaded
    var int = setInterval("doThis(i)",200); //500 is the fade in speed in milliseconds
});

function doThis() {
    var imgs = jQuery('.featured-image img, .home #main a, #blogroll article img, .featured-blog-image img').length; //count the number of images on the page
    if (i >= imgs) { //Loop the images
        clearInterval(int); //When it reaches the last image the loop ends
    }
    jQuery('.featured-image img:hidden, .home #main a:hidden, #blogroll article img:hidden, .featured-blog-image img:hidden').eq(0).fadeIn('200'); //fades in the hidden images one by one
    i++; //add 1 to the count
    $('.home .widget .execphpwidget').delay(4000).css('background-image', 'none');

}


