var records = [],
    charCode = ''

$(document).keypress(function(event) {
    charCode = '#' + event.key.toUpperCase()

    $(charCode).css({
        'animation-name': 'hover-1'
    })
})

$(document).keyup(function(event) {
    $(charCode).css({
        'animation-name': 'hover-2'
    })
})

$('.keyboard-buttons').mouseenter(function() {
    /*records.push(Date.now())
    console.log(records)*/

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
