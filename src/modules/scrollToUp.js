import { animate } from "./helpers";

export const scrollToUp = () => {
    const toUpBtn = document.querySelector('.smooth-scroll');
    const firstSection = document.getElementById('offer');

    toUpBtn.style.opacity = "0";

    window.addEventListener('scroll', () => {
        const fullHeight = firstSection.offsetHeight + firstSection.offsetTop;
        let scrollDistance = window.scrollY;

        if (scrollDistance >= fullHeight) {
            toUpBtn.style.opacity = "1";
        } else {
            toUpBtn.style.opacity = "0";
        }
    });

    toUpBtn.addEventListener('click', () => {
        const currentPosY = window.scrollY;
        console.log(currentPosY);


        animate({
            duration: 3000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                window.scrollTo(0, (currentPosY - Math.floor(currentPosY * progress)));
            }
        });
    });


};