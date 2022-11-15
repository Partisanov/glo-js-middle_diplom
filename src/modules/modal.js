export const modal = () => {
    const body = document.getElementsByTagName('body')[0];
    const overlay = document.querySelector('.overlay');
    const callbackModal = document.querySelector('.header-modal');
    const servicesModal = document.querySelector('.services-modal');

    body.addEventListener('click', (e) => {
        //show callback modal
        if (e.target.closest('#btn-callback')) {
            e.preventDefault();
            overlay.style.display = 'block';
            callbackModal.style.display = 'block';
        }
        //close callback modal
        if ((e.target.classList.contains('overlay') ||
            e.target.classList.contains('header-modal__close')) && (callbackModal.style.display === 'block')) {
            overlay.style.display = 'none';
            callbackModal.style.display = 'none';
        }
        //show services modal
        if (e.target.closest('.service-button')) {
            overlay.style.display = 'block';
            servicesModal.style.display = 'block';
        }
        //close services modal
        if ((e.target.classList.contains('overlay') ||
            e.target.classList.contains('services-modal__close')) && (servicesModal.style.display === 'block')) {
            overlay.style.display = 'none';
            servicesModal.style.display = 'none';
        }

        //show image modal


    });
};