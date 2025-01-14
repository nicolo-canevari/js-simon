
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
    
});