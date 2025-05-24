export function timer() { //Логика работы таймера
    const endDate = new Date('2025-12-18T23:59:59');
    const timerEl = document.querySelector('#timer');
    const container1 = document.querySelector('.container1');

    function appTimer() {
        const now = new Date();
        const timeLeft = endDate - now;
        if (timeLeft <= 0) {
            container1.style.display = 'none';
            timerEl.innerHTML = '<p>Акция закончилась</p>'
            return
        }

        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / (1000));

        days.textContent = daysLeft.toString().padStart(2, '0');
        hours.textContent = hoursLeft.toString().padStart(2, '0');
        minutes.textContent = minutesLeft.toString().padStart(2, '0');
        seconds.textContent = secondsLeft.toString().padStart(2, '0');
    }

    appTimer();
    setInterval(appTimer, 1000);
}