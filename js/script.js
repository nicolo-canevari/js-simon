
document.addEventListener("DOMContentLoaded", () => {

    const numbersList = document.getElementById('numbers-list');
    const inputGroup = document.getElementById('input-group');
    const answersForm = document.getElementById('answers-form');
    const message = document.getElementById('message');
    const countdown = document.getElementById('countdown');
    const numbersToGuess = [];
    let countdownTimer;

    // Funzione per generare 5 numeri casuali tra 1 e 50
    function generateRandomNumbers() {

        while (numbersToGuess.length < 5) {

            const randomNumber = Math.floor(Math.random() * 50) + 1;

            if (!numbersToGuess.includes(randomNumber)) {

                numbersToGuess.push(randomNumber);

            }

        }

    }

    // Mostra i numeri nella lista
    numbersList.innerHTML = numbersToGuess.map(num => `<li class="fs-2">${num}</li>`).join('');

}

     // Funzione avvio del countdown
     function startCountdown() {

        let timeRemaining = 30;
        countdown.innerText = `Tempo restante: ${timeRemaining}s`;

        countdownTimer = setInterval(() => {

            timeRemaining--;
            countdown.innerText = `Tempo restante: ${timeRemaining}s`;

            if (timeRemaining <= 0) {

                clearInterval(countdownTimer);

                // Nasconde i numeri dopo il countdown
                numbersList.innerHTML = ''; 

                // Mostra il form per inserire i numeri
                answersForm.classList.remove('d-none'); 

                // Resetta eventuali messaggi di errore
                message.innerText = ''; 

            }

        }, 1000);

    }
