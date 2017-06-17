(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

<<<<<<< HEAD
    var width = $(document).width();
    $('svg').attr('width', width);
    console.log(width)


=======
>>>>>>> 06a8eba722b420cb7a89554ef81a0ff16aa9148c
    $('button[data-province]').on('click', function(e){
      e.preventDefault();

      var province = $(this).data('province');
      $('button[data-province="'+province+'"]').removeClass('active');
      $(this).addClass('active');
      var year = $(this).html();

<<<<<<< HEAD
      var newUrl = "assets/img/sankey/" + province + "/sankey_" + province + "_" + year + ".png";
                    
      $('img[data-province="'+province+'"]').attr('src', newUrl)
=======
      var newUrl = "assets/img/sankey_svg/svg_" + province + "/" + province + "_" + year + ".svg";

      $('object[data-province="'+province+'"]').attr('data', newUrl);

>>>>>>> 06a8eba722b420cb7a89554ef81a0ff16aa9148c
    });
	});


})(jQuery);
