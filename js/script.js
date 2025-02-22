
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

// Funzione avvio del countdown
function startCountdown() {

    // Secondi del timer
    let timeRemaining = 5;
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

            // Svuota i campi input rimuovendo eventuali valori presenti (bug numeri)
            const inputs = inputGroup.querySelectorAll('input');
            inputs.forEach(input => {

                input.value = ''; 

            });

        }

    }, 1000);

}

// Funzione per verificare le risposte
function verifyAnswers() {

    const userAnswers = Array.from(inputGroup.querySelectorAll('input')).map(input => parseInt(input.value));

    // Rimuovo eventuali duplicati
    const uniqueUserAnswers = [...new Set(userAnswers)];

    // Controllo valori invalidi
    if (userAnswers.length !== 5 || uniqueUserAnswers.length !== 5) {

        message.innerText = 'Inserisci 5 numeri unici tra 1 e 50.';
        return;

    }

    if (userAnswers.some(num => isNaN(num) || num < 1 || num > 50)) {

        message.innerText = 'Inserisci solo numeri tra 1 e 50.';
        return;

    }

    // Verifico quante risposte sono corrette
    let correctAnswers = 0;
    userAnswers.forEach(num => {
        if (numbersToGuess.includes(num)) {

            correctAnswers++;

        }

    });

    // Mostra il risultato
    message.innerText = `Hai indovinato ${correctAnswers} numeri!`;

}

// Funzione per iniziare il gioco
function startGame() {

    generateRandomNumbers();

    // Mostra i numeri generati
    numbersList.innerHTML = numbersToGuess.map(num => `<li class="fs-2">${num}</li>`).join('');

    startCountdown();

}

// Event listener per il form di risposta
answersForm.addEventListener('submit', (e) => {

    // Impedisco l'invio del form (evitando che la pagina venga ricaricata) e faccio eseguire solo la verifica dei numeri inseriti
    e.preventDefault();

    // Verifico i numeri inseriti
    verifyAnswers();

});

// Avvia il gioco al caricamento della pagina
startGame();

