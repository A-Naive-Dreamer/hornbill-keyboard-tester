var records = []

$(document).ready(function() {
    $('#keyboard-input').focus()
})

$('#keyboard-input').keydown(function(event) {
    console.log(event.which)
})

$('.keyboard-buttons').mouseenter(function() {
    /*records.push(Date.now())
    console.log(records)*/

    $(this).css({
        'background': 'rgb(145, 145, 145)',
        'transform': 'scale(0.9)'
    })
})

$('.keyboard-buttons').mouseleave(function () {
    $(this).css({
        'background': 'rgb(175, 175, 175)',
        'transform': 'scale(1.0)'
    })
})
