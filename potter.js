$(window).on('scroll', function () {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();

    
    $('.layer-1').css('top', (0 - scrolled * 0.25) + 'px');
    $('.layer-2').css('top', (0 - scrolled * 0.5) + 'px');
    $('.layer-3').css('top', (0 - scrolled * 0.75) + 'px');

    
    $('.rock-1').css('top', (400 - scrolled * 0.8) + 'px');
    $('.rock-2').css('top', (200 - scrolled * 0.6) + 'px');
    $('.rock-3').css('top', (500 - scrolled * 0.4) + 'px');
    $('.rock-4').css('top', (600 - scrolled * 0.5) + 'px');
    $('.rock-5').css('top', (600 - scrolled * 0.7) + 'px');
    $('.rock-6').css('top', (400 - scrolled * 0.7) + 'px');
    $('.rock-7').css('top', (600 - scrolled * 0.5) + 'px');
    $('.rock-8').css('top', (200 - scrolled * 0.2) + 'px');
    $('.rock-9').css('top', (200 - scrolled * 0.4) + 'px');
}


function createCandles(count = 20) {
    for (let i = 0; i < count; i++) {
        const candle = $('<div class="candle"></div>');
        candle.css({
            left: Math.random() * 100 + 'vw',
            animationDelay: Math.random() * 5 + 's',
            animationDuration: (Math.random() * 5 + 5) + 's'
        });
        $('#candles').append(candle);
    }
}

$(document).ready(function () {
    createCandles();
});
