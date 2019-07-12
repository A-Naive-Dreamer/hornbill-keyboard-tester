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
