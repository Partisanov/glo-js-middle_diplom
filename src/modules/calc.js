import { animate, debounce } from "./helpers";

export const calc = () => {
    const calcBlock = document.getElementById('calc');
    const calcType = document.getElementById('calc-type');
    const caclSquare = document.getElementById('calc-input');
    const calcMaterial = document.getElementById('calc-type-material');
    const calcTotal = document.getElementById('calc-total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;
        const caclSquareValue = +caclSquare.value;

        let totalValue = 0;

        if ((calcType.value !== '--') && (calcMaterial.value !== '--') && caclSquare.value) {
            totalValue = caclSquareValue * calcTypeValue * calcMaterialValue;
        } else {
            totalValue = 0;
        }

        return totalValue;
    };

    caclSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/, '');
    });

    calcBlock.addEventListener('input', debounce(() => {
        const startNum = +calcTotal.value;
        const endNum = countCalc();
        const increment = (startNum < endNum) ? 1 : -1;
        const range = Math.abs(endNum - startNum);

        if (startNum !== endNum) {
            animate({
                duration: 3000,

                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    calcTotal.value = `${startNum + increment * Math.floor(progress * range)}`;
                }
            });
        }
    }, 1000));

};