const accordionBtns = document.getElementsByClassName('accordion-btn');
const answers = document.getElementsByClassName('answer');

for(let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', () => {
        accordionBtns[i].classList.toggle('active');
        const isExpanded = accordionBtns[i].getAttribute('aria-expanded') === 'true';
        accordionBtns[i].setAttribute('aria-expanded', !isExpanded);
        answers[i].setAttribute('aria-hidden', isExpanded);
    });
};

