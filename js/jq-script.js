'use strict';
	$(document).ready(function () {
        var isotope = $('.container--images').isotope({ // для фильтрации картинок по типу data-filter
            itemSelector: '.container--images-image',
            percentPosition: true,
            // layoutMode: 'masonry'
            masonry: {
                columnWidth: '.image-sizer',
                gutter: '.gutter-sizer'
            }
        });
        $('.container--switchers a').on('click', function (e) {
            $('.container--switchers li').removeClass('active');
            $(this).parent().addClass('active');
            e.preventDefault();
            var filter = $(this).attr('data-filter');
            filter = filter == '*' ? filter : '.' + filter;
            isotope.isotope({
                filter: filter
            })
        });
        $('.container__nav-menu a').on('click', function (e) {
            $('.container__nav-menu li').removeClass('active');
            $(this).parent().addClass('active');
            e.preventDefault();
        });
        $('#slider').slick({ //слайдер
            autoplay: true,
            arrows: false,
            infinite: true
        });

	});