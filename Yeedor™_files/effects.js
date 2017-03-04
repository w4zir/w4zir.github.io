$(document).ready(function () {

    $('#portfolio-pieces li:even').addClass('even');
    $('#portfolio-pieces li:odd').addClass('odd');

    /*------------------------------------------------------------------*/

    $("a").hover(function(){
        $(this).stop().animate({"opacity": 0.5}, 200);
    },function(){
        $(this).stop().animate({"opacity": 1}, 200);
    });

    /*------------------------------------------------------------------*/
    /*Design Process*/

    $(window).scroll(function () {
        $('img.lazy').each(function (i) {
            var oTop = $(this).offset().top;
            var oHeight = $(this).outerHeight();

            var wTop = $(window).scrollTop();
            var wHeight = $(window).height();

            if (oTop < wTop + wHeight) {
                var diff = ((wTop + wHeight - oTop) / oHeight);

                if (diff > 1) diff = 1;
                else if (diff < 0) diff = 0;

                $(this).animate({ opacity: "1"}, 400 );
            }
        });
    });

    /*------------------------------------------------------------------*/
    /*Rotating Words*/

    /*------------------------------------------------------------------*/


    $(function() {

    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();

});

    /*------------------------------------------------------------------*/

    $('#site-description').hover(function(){
        $('#arrow-down').css('background-position', 'center 0px');
    }, function(){
        $('#arrow-down').css('background-position', 'center -16px');
    });

    /*------------------------------------------------------------------*/
    $('#site-description').click(function (e) {
    e.preventDefault();
    $('#menu').slideToggle('1000', "easeOutQuad", function () {
        if ($(this).is(':visible')) {
                 $('#header').addClass('active');
                 $('#header').removeClass('inactive');
                 $('#arrow-down').css("background-image", "url(/wp-content/themes/yeedor/_assets/icons/arrow-sprite-active.png)");

        } else {
             $('#header').addClass('inactive');
             $('#header').removeClass('active');
             $('#arrow-down').css("background-image", "url(/wp-content/themes/yeedor/_assets/icons/arrow-sprite.png)");
        }
    });

    /*------------------------------------------------------------------*/

});
});
