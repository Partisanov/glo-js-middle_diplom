export const modal = () => {
    const body = document.getElementsByTagName('body')[0];
    const openBtn = document.getElementById('btn-callback');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.header-modal');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        modal.style.display = 'block';

    });

    body.addEventListener('click', (e) => {
        if (modal.style.display === 'block') {

            if (e.target.classList.contains('overlay') || e.target.classList.contains('header-modal__close')) {
                overlay.style.display = 'none';
                modal.style.display = 'none';
            }
        }
    });

};