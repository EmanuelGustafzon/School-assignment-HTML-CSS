const toggleTheme= () => {
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.className === 'light-theme' ? 
        bodyElement.className = 'dark-theme' 
        : bodyElement.className = 'light-theme'; 
    };

const accordionBtns = document.getElementsByClassName('activate-trigger');
const answers = document.getElementsByClassName('answer');
for(let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', () => {
        accordionBtns[i].classList.toggle('active');
        answers[i].classList.toggle('hidden');
    });
};