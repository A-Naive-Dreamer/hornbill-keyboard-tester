$('.keyboard-buttons').mouseenter(function () {
    $(this).css({
        'background': 'rgb(145, 145, 145)',
        'transform': 'scale(0.9)'
    })
})

$('.keyboard-buttons').mouseout(function () {
    $(this).css({
        'background': 'rgb(175, 175, 175)',
        'transform': 'scale(1.0)'
    })
})
