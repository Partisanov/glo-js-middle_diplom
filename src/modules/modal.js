export const modal = () => {
    const body = document.getElementsByTagName('body')[0];
    const overlay = document.querySelector('.overlay');
    const callbackModal = document.querySelector('.header-modal');
    const servicesModal = document.querySelector('.services-modal');
    const sertificateModal = document.querySelector('.sertificate__modal');
    const sertificateImg = document.querySelector('.sertificate__img');

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
        if (e.target.closest('.sertificate-document')) {
            e.preventDefault();
            const imgSrc = e.target.closest('.sertificate-document').getAttribute('href');
            sertificateImg.setAttribute("src", imgSrc);
            overlay.style.display = 'block';
            sertificateModal.style.display = 'block';

        }

        //close image modal
        if ((e.target.classList.contains('overlay') ||
            e.target.classList.contains('sertificate__btn-close')) && (sertificateModal.style.display === 'block')) {
            overlay.style.display = 'none';
            sertificateModal.style.display = 'none';
        }
    });
};