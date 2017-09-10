jQuery(document).ready(function($) {
	
	$('.nav').on('click', '.nav__toggle', function(event) {
		event.preventDefault();
		//$('.nav__list').slideToggle() Solução que serve, só nao serve se andarmos a brincar com o re-size na página
		$('.nav__list').toggleClass('nav__list--open');
		$('.nav__toggle').toggleClass('nav__toggle--open');
	});


});