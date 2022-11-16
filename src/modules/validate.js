export const validate = () => {
    const nameInputs = document.querySelectorAll('.form-control[name="fio"]');
    const telInputs = document.querySelectorAll('.form-control[name="phone"]');

    nameInputs.forEach(inputName => {
        inputName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zа-яё]/i, '');
        });
    });
    telInputs.forEach(inputTel => {
        inputTel.setAttribute('maxlength', '17');
        inputTel.addEventListener('focus', (e) => {
            if (!/^\+\d*$/.test(e.target.value)) {
                e.target.value = '+';
            }
        });
        inputTel.addEventListener('keypress', (e) => {
            if (!/\d/.test(e.key)) {
                e.preventDefault();
            }
        });
    });
};