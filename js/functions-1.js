$('.keyboard-buttons').mouseenter(function () {
    $(this).css({
        'background-image': 'url(../assets/images/icon-2.png)',
        'transform': 'scale(0.9)'
    })
})

$('.keyboard-buttons').mouseleave(function () {
    $(this).css({
        'background-image': 'url(../assets/images/icon-1.png)',
        'transform': 'scale(1.0)'
    })
})
