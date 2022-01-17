const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
}


const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#winningScore");

let winningScore;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("winner", "loser");
        p.button.disabled = false;
    }

    /*p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p1.display.textContent = 0;
    p1.display.classList.remove("winner", "loser");
    p2.display.classList.remove("loser", "winner");
    p1.button.disabled = false;
    p2.button.disabled = false;*/
}

p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
})

p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
})

resetButton.addEventListener("click", reset);


winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

