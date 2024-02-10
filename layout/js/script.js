$(document).ready(function(){  
    $('.variacoes .opcoes .cores').on('click', function() {
        $('.variacoes .opcoes .cores').removeClass('active');
        $(this).addClass('active');
    });  

    $('#overlay').addClass('active');
    $('#popup').addClass('active');

    $('#closePopup, #overlay').click(function() {
        $('#overlay').removeClass('active');
        $('#popup').removeClass('active');
    });

    if ($(window).width() < 768) {
        $('.footerTop .col-3').off('click').on('click', function(){
            $('.footerTop .col-3').not(this).removeClass('active').find('ul').hide();            
            $(this).toggleClass('active').find('ul').toggle();
        });
        $('.buscar img').click(function(){
            $('#buscaMobile').toggleClass('d-none');
        });
    }
    $('.listaProdutos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            }
        ]
    });
    if ($(window).width() < 768) {
        $('#servicos .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            autoplay: true,
        }); 
        $('#parceiras .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            autoplay: true,
        });
    }
});
