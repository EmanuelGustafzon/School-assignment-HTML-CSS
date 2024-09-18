const accordionBtns = document.getElementsByClassName('activate-trigger');
const answers = document.getElementsByClassName('answer');
for(let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', () => {
        accordionBtns[i].classList.toggle('active');
        answers[i].classList.toggle('hidden');
    });
};