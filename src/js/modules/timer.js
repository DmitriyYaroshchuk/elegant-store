function timer() {
// const endDate = new Date();
// console.log("currentDate :", endDate);

// endDate.setDate(endDate.getDate() + 3); // 3 дня от текущей даты
// console.log("3 дня от текущей даты :",  endDate);

    const endDate = new Date('March 31, 2024, 23:59:59');
    console.log(endDate)

    const daysElem = document.querySelector('#days');
    const hoursElem = document.querySelector('#hours');
    const minutesElem = document.querySelector('#minutes');
    const secondsElem = document.querySelector('#seconds');

    let timerInterval;

    function updateTimer() {
        const currentDate = new Date();
        const timeDifference = endDate - currentDate;
        // console.log("Разница между тек. и кон. датой :", timeDifference); // В мили секундах

        if (timeDifference <= 0) {
            daysElem.textContent = '0';
            hoursElem.textContent = '0';
            minutesElem.textContent = '0';
            secondsElem.textContent = '0';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // День в мили секундах
        const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);

        daysElem.textContent = days < 10 ? `0${days}` : days;
        hoursElem.textContent = hours < 10 ? `0${hours}` : hours;
        minutesElem.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsElem.textContent = seconds < 10 ? `0${seconds}` : seconds;

    }

    updateTimer(); // Запускаем счетчик при загрузке страницы

    timerInterval = setInterval(updateTimer, 1000); // Обновляем таймер
}

export default timer;