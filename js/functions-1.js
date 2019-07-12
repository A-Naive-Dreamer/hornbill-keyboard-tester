var records = [],
    charCode = '',
    animate1 = function () {},
    animate2 = function () {}

$(document).keydown(function(event) {
    animate1 = (function() {
        let key = '#' + event.key.toUpperCase()

        return function() {
            $(key).css({
                'animation-name': 'hover-1'
            })

            $(document).keyup(function(event) {
                $(key).css({
                    'animation-name': 'hover-2'
                })
            })
        }
    })()

    animate1()
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
