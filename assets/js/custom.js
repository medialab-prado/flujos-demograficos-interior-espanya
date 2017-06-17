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


    var province = 'avila';
    var year = 2015;
    $('button').on('click', function(e){
      e.preventDefault();

      if($(this).data('year') !== undefined) {
        $('button[data-year]').removeClass('active');
        year = $(this).html();
      }
      if($(this).data('province') !== undefined) {
        $('button[data-province]').removeClass('active');
        province = $(this).data('province');
      }

      $(this).addClass('active');

      var newUrl = "assets/img/sankey/" + province + "/sankey_" + province + "_" + year + ".png";
      console.log(newUrl);

      $('img[data-province]').attr('src', newUrl)
    });
	});


})(jQuery);
