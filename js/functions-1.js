var records = [],
    charCode = ''

$(document).ready(function() {
    $('#keyboard-input').focus()
})

$('#keyboard-input').keydown(function(event) {
    charCode = '#' + event.key.toUpperCase()

    $(charCode).css({
        'background-image': 'url(../assets/images/icon-2.png)',
        'transform': 'scale(0.9)'
    })
})

$('#keyboard-input').keyup(function(event) {
    $(charCode).css({
        'background-image': 'url(../assets/images/icon-1.png)',
        'transform': 'scale(1.0)'
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
