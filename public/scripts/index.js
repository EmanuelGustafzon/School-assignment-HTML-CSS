const toggleTheme= () => {
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.className === 'light-theme' ? 
        bodyElement.className = 'dark-theme' 
        : bodyElement.className = 'light-theme'; 
    };

const arrowBtns = document.getElementsByClassName('arrow-btn');
const answers = document.getElementsByClassName('answer');
for(let i = 0; i < arrowBtns.length; i++) {
    arrowBtns[i].addEventListener('click', () => {
        arrowBtns[i].classList.toggle('active');
        answers[i - 1].classList.toggle('hidden');
    });
};