var backButton = document.getElementById('back-button')

backButton.addEventListener('click', () => {
    parent.location.assign('../pages/index.html')
})