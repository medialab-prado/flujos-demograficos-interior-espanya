(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

    $('button[data-province]').on('click', function(e){
      e.preventDefault();

      var province = $(this).data('province');
      $('button[data-province="'+province+'"]').removeClass('active');
      $(this).addClass('active');
      var year = $(this).html();

      var newUrl = "assets/img/sankey_svg/svg_" + province + "/" + province + "_" + year + ".svg";

      $('iframe[data-province="'+province+'"]').attr('src', newUrl);

    });
	});


})(jQuery);
