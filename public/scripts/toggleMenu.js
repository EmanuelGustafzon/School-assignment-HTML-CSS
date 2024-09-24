const burger = document.getElementsByClassName('burger-menu')[0];
const menu = document.getElementById('main-menu');
const burgerIcon = document.getElementById('burger-icon');

const setMenuState = () => {
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !isExpanded);
    menu.setAttribute('aria-hidden', isExpanded);
    isExpanded ? burgerIcon.className = 'fas fa-bars' : burgerIcon.className = 'fas fa-times'
}
burger.addEventListener('click', () => {
    setMenuState();
});
// close menu when link are clicked
Array.from(menu.children).forEach(child => {
    child.addEventListener('click', () => setMenuState());
})


