import { sendData } from "./sendData";

export const sendForm = () => {
    const forms = document.querySelectorAll('form');

    if (forms.length === 0) {
        throw new Error('отсутствует форма для отпраки');
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const formBody = {};
            const totalValue = (document.getElementById('calc-total')) ?
                +document.getElementById('calc-total').value : '';


            formData.forEach((value, key) => {
                if (value) {
                    formBody[key] = value;
                }
            });

            if (totalValue > 0) {
                formBody.total = totalValue;
            }

            sendData(formBody)
                .then(data => {
                    form.reset();
                    alert('Заявка успешно отправлена! \n С Вами свяжутся в ближайшее время!');
                })
                .catch(error => {
                    console.log(error.message);
                    alert(`Произошла ошибка, данные не отправлены. \n ${error.message}`);

                });

        });
    });
};