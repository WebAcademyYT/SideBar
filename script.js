const closeBtn = document.getElementById('close');
const sideNav = document.querySelector('.sidenav');
const content = document.querySelector('.content');

closeBtn.addEventListener('click', () => {
    sideNav.classList.toggle('closed');
    content.classList.toggle('active');
})