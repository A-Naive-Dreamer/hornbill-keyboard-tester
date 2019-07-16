var clickAborter = document.getElementById('click-aborter')

clickAborter.focus()

document.addEventListener('keydown', () => {
    clickAborter.focus()
})

clickAborter.addEventListener('keydown', (event) => {
    let charCode = 'char-code-' + event.which,
        key = document.getElementById(charCode)

    clickAborter.value = ''
    key.style.animationName = 'hover-1'

    document.addEventListener('keyup', () => {
        key.style.animationName = 'hover-2'
    })
})
