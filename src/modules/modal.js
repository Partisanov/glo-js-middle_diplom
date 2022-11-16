export const modal = () => {
    const body = document.getElementsByTagName('body')[0];
    const overlay = document.querySelector('.overlay');
    const callbackModal = document.querySelector('.header-modal');
    const servicesModal = document.querySelector('.services-modal');
    const sertificateModal = document.querySelector('.sertificate__modal');
    const sertificateImg = document.querySelector('.sertificate__img');
    const smoothBtn = document.querySelector('.smooth-scroll');


    const disableScroll = () => {
        const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
        overlay.style.display = 'block';
        body.style.paddingRight = lockPaddingValue;
        smoothBtn.style.opacity = '0';
        body.classList.add('disable-scroll');
    };

    const enableScroll = () => {
        overlay.style.display = 'none';
        body.style.paddingRight = '0px';
        smoothBtn.style.opacity = (window.scrollY >= (document.getElementById('offer').offsetHeight +
            document.getElementById('offer').offsetTop)) ? '1' : '0';
        body.classList.remove('disable-scroll');
    };

    body.addEventListener('click', (e) => {
        //show callback modal
        if (e.target.closest('#btn-callback')) {
            e.preventDefault();
            disableScroll();
            callbackModal.style.display = 'block';
        }
        //close callback modal
        if ((e.target.classList.contains('overlay') ||
            e.target.classList.contains('header-modal__close')) && (callbackModal.style.display === 'block')) {
            enableScroll();
            callbackModal.style.display = 'none';
        }
        //show services modal
        if (e.target.closest('.service-button')) {
            disableScroll();
            servicesModal.style.display = 'block';
        }
        //close services modal
        if ((e.target.classList.contains('overlay') ||
            e.target.classList.contains('services-modal__close')) && (servicesModal.style.display === 'block')) {
            enableScroll();
            servicesModal.style.display = 'none';
        }

        //show image modal
        if (e.target.closest('.sertificate-document')) {
            e.preventDefault();
            disableScroll();
            const imgSrc = e.target.closest('.sertificate-document').getAttribute('href');
            sertificateImg.setAttribute("src", imgSrc);
            sertificateModal.style.display = 'block';
        }

        //close image modal
        if ((e.target.classList.contains('overlay') ||
            e.target.classList.contains('sertificate__btn-close')) && (sertificateModal.style.display === 'block')) {
            enableScroll();
            sertificateModal.style.display = 'none';
        }
    });
};