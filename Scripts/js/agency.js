/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function loadMenu(){
	$('document').ready(function(){
		$('#mainMenu').append("<div class='container'>"+
								"<div class='navbar-header page-scroll'>"+
								"<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>"+
								"<span class='sr-only'>Toggle navigation</span>"+
								"<span class='icon-bar'></span>"+
								"<span class='icon-bar'></span>"+
								"<span class='icon-bar'></span></button>"+
								"<a class='navbar-brand page-scroll' href='index.html'>The Library</a></div>"+
								"<!-- Collect the nav links, forms, and other content for toggling -->"+
								"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"+
								"<ul class='nav navbar-nav navbar-right'>"+
								"<li class='hidden'><a href='#page-top'></a></li>"+
								"<li><a class='page-scroll' href='#services'>Services</a></li>"+
								"<li><a class='page-scroll' href='#portfolio'>Busqueda de libros</a></li>"+
								"<li><a class='page-scroll' href='#about'>Acerca de Nosotros</a></li>"+
								"<li><a class='page-scroll' href='#team'>Equipo</a></li>"+
								"<li><a class='page-scroll' href='#contact'>Contactanos</a></li>"+
								"<li><span class='fa-stack fa-2x'><a href='Carrito.html'><i class='fa fa-circle fa-stack-2x text-primary'></i><i class='fa fa-shopping-cart fa-stack-1x fa-inverse'></i></a></span></li>"+
								"</ul></div><!-- /.navbar-collapse --></div>");
	});
}
function loadMenuRef(){
	$('document').ready(function(){
		$('#mainMenu').append("<div class='container'>"+
								"<div class='navbar-header page-scroll'>"+
								"<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>"+
								"<span class='sr-only'>Toggle navigation</span>"+
								"<span class='icon-bar'></span>"+
								"<span class='icon-bar'></span>"+
								"<span class='icon-bar'></span></button>"+
								"<a class='navbar-brand page-scroll' href='index.html'>The Library</a></div>"+
								"<!-- Collect the nav links, forms, and other content for toggling -->"+
								"<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"+
								"<ul class='nav navbar-nav navbar-right'>"+
								"<li class='hidden'><a href='#page-top'></a></li>"+
								"<li><a class='page-scroll' href='Index.html#services'>Services</a></li>"+
								"<li><a class='page-scroll' href='Busqueda.html'>Busqueda de libros</a></li>"+
								"<li><a class='page-scroll' href='Informacion.html'>Acerca de Nosotros</a></li>"+
								"<li><a class='page-scroll' href='Index.html#team'>Equipo</a></li>"+
								"<li><a class='page-scroll' href='Contacto.html'>Contactanos</a></li>"+
								"<li><span class='fa-stack fa-2x'><a href='Carrito.html'><i class='fa fa-circle fa-stack-2x text-primary'></i><i class='fa fa-shopping-cart fa-stack-1x fa-inverse'></i></a></span></li>"+
								"</ul></div><!-- /.navbar-collapse --></div>");
	});
}