$(document).ready(function(){
				$('.option-sidebar-toggle').click(function(){
					$(this).toggleClass('clicked');
					$('.options_sidebar').slideToggle();
					$('.cog-arrow-down').toggle();
					$('.cog-arrow-up').toggle();
				});

				$('.fa-search').click(function(){
					$('.search-form').toggle();
					$('.search-form input').focus();
				});
			});