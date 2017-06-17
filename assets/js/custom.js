(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

    var width = $(document).width();
    $('svg').attr('width', width);
    console.log(width)


    $('button[data-province]').on('click', function(e){
      e.preventDefault();

      var province = $(this).data('province');
      $('button[data-province="'+province+'"]').removeClass('active');
      $(this).addClass('active');
      var year = $(this).html();

      var newUrl = "assets/img/sankey/" + province + "/sankey_" + province + "_" + year + ".png";
                    
      $('img[data-province="'+province+'"]').attr('src', newUrl)
    });
	});


})(jQuery);
