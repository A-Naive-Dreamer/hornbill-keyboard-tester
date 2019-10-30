var keyboardType = document.getElementById('keyboard-type'),
    testButton = document.getElementById('test-button')

testButton.addEventListener('click', () => {
    let type = keyboardType.value.toLowerCase().trim().replace(/\s/g, '-').replace(/[^a-zA-Z-]/g, ''),
        url = '../keyboard-layouts/' + type + '.html'

    location.assign(url)
})
