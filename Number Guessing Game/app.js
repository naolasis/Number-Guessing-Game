const input = document.getElementById("myInput");
const submit = document.getElementById("mysubmit");
const label = document.getElementById("mylabel");
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempt = 0;
let guess;
let running = true;

function getUserInput() {
    return new Promise((resolve) => {

        submit.onclick = function () {
            guess = input.value;
            guess = Number(guess);

            resolve();
        };
    });
}

async function runGame() {
    while (running) {
        await getUserInput();

        if (isNaN(guess)) {
            label.textContent = "What You Enter Is Not a Number";
        } else if (guess < minNum || guess > maxNum) {
            label.textContent = `The Number Must Be Between ${minNum} - ${maxNum}`;
        } else {
            attempt++;

            if (guess > answer) {
                label.textContent = "Too High! Try Again";
            } else if (guess < answer) {
                label.textContent = "Too Low! Try Again";
            } else {
                label.textContent = `Correct! The Answer Was ${answer} With ${attempt} Attempts`;
                running = false;
            }
        }
    }
}

runGame();
