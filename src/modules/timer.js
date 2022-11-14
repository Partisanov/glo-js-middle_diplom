export const timer = (deadline) => {
    const timersDays = document.querySelectorAll('.count_1');
    const timersHours = document.querySelectorAll('.count_2');
    const timersMinutes = document.querySelectorAll('.count_3');
    const timersSeconds = document.querySelectorAll('.count_4');

    let idInterval;

    const formatNumber = (num) => {
        return (num < 10) ? '0' + num : num;
    };

    const declOfNum = (number, words) => {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 :
            [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    };

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        if (timeRemaining > 0) {
            days = Math.floor(timeRemaining / 60 / 60 / 24);
            hours = Math.floor((timeRemaining / 60 / 60) % 24);
            minutes = Math.floor((timeRemaining / 60) % 60);
            seconds = Math.floor(timeRemaining % 60);
        }

        return { timeRemaining, days, hours, minutes, seconds };
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();
        timersDays.forEach(days => {
            days.innerHTML = "";
            days.insertAdjacentHTML('beforeend', `${declOfNum(getTime.days, ['День:', 'Дня:', 'Дней:'])}
            <br>
         <span>${(getTime.days > 0) ? formatNumber(getTime.days) : '00'}</span>`);
        });

        timersHours.forEach(hours => {
            hours.innerHTML = "";
            hours.insertAdjacentHTML('beforeend', `${declOfNum(getTime.hours, ['Час:', 'Часа:', 'Часов:'])}
            <br>
            <span>${formatNumber(getTime.hours)}</span>`);
        });

        timersMinutes.forEach(minutes => {
            minutes.innerHTML = "";
            minutes.insertAdjacentHTML('beforeend', `${declOfNum(getTime.minutes, ['Минута:', 'Минуты:', 'Минут:'])}
            <br>
            <span>${formatNumber(getTime.minutes)}</span>`);
        });

        timersSeconds.forEach(seconds => {
            seconds.innerHTML = "";
            seconds.insertAdjacentHTML('beforeend', `${declOfNum(getTime.seconds, ['Секунда:', 'Секунды:', 'Секунд:'])}
            <br>
            <span>${formatNumber(getTime.seconds)}</span>`);
        });

        if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
        }
    };

    updateClock();
    idInterval = setInterval(updateClock, 500);

};