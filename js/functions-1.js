var records = [],
    charCode = '',
    animate1 = function () {},
    animate2 = function () {}

$(document).keydown((event) => {
    animate1 = () => {
        let key = '#char-code-' + event.which

        return function() {
            $(key).css({
                'animation-name': 'hover-1'
            })

            $(document).keyup(() => {
                $(key).css({
                    'animation-name': 'hover-2'
                })
            })
        }
    }

    animate1()
})

$('.keyboard-buttons').mouseenter(() => {
    /*records.push(Date.now())
    console.log(records)*/

    $(this).css({
        'animation-name': 'hover-1'
    })
})

$('.keyboard-buttons').mouseleave(() => {
    $(this).css({
        'animation-name': 'hover-2'
    })
})
