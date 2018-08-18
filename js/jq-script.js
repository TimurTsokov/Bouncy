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
        $('.slider').slick({
            arrows: false,
            dots: true,
            infinite: false,
            fade: true,
            easing: 'ease-in'
        });
    });
var map, marker, infoWindow, // Подключение карты
    center = {
        lat: 47.1013689,
        lng: 37.5483022
    };

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16
    });

    marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Hello World!',
        icon: 'img/Marker.png'
    });
    infoWindow = new google.maps.InfoWindow({
        content: '<h3>info window of Beetroot</h3>'
    });
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
}
