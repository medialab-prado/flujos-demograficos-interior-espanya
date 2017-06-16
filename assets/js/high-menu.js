var url = window.location.href, 
		urlarr = url.split('/'),
		page = urlarr[urlarr.length - 1].split('.')[0];

$('.main-nav a').removeClass('selected');
$('.' + page).addClass('selected');
