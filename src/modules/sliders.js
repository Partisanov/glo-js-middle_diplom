import Swiper, { Navigation } from 'swiper';
Swiper.use(Navigation);


export const sliders = () => {

    const benefitsSlider = new Swiper('.benefits__slider', {
        direction: 'horizontal',
        slidesPerView: 1,


        // Navigation arrows
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },

        breakpoints: {
            // when window width is >= 576px
            576: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    });

};