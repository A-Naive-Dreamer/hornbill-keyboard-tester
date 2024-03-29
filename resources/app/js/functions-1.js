var clickAborter = document.getElementById('click-aborter'),
    backButton = document.getElementById('back-button')

clickAborter.focus()

document.addEventListener('keydown', () => {
    clickAborter.focus()
})

clickAborter.addEventListener('keydown', (event) => {
    let charCode = 'char-code-' + event.which,
        key = document.getElementById(charCode),
        keyClick = document.getElementById('key-click')

    clickAborter.value = ''
    key.style.animationName = 'hover-1'

    keyClick.play()

    document.addEventListener('keyup', () => {
        key.style.animationName = 'hover-2'
        key.style.borderBottom = '5px solid #FF0000'
        key.style.borderLeft = '3px solid #FF0000'
        key.style.borderRight = '5px solid #FF0000'
        key.style.borderTop = '3px solid #FF0000'
    })
})

backButton.addEventListener('click', () => {
    location.assign('../pages/index.html')
})
