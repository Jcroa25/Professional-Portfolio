
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const sendButton = document.getElementById('send')



function toggleButton() {
    navList.classList.toggle('show')
}


hamburgerButton.addEventListener('click', toggleButton)


