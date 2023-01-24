
document.querySelector("button").addEventListener("click", rollDice);

// Generate a random number from 1-6
function rollDice() {
    let randomNumber1 = Math.ceil(Math.random() * 6);
    let selected_image = `images/dice${randomNumber1}.png`;
    document.querySelector(".img1").setAttribute("src", selected_image);

    let randomNumber2 = Math.ceil(Math.random() * 6);
    selected_image = `images/dice${randomNumber2}.png`;
    document.querySelector(".img2").setAttribute("src", selected_image);

    let winner = "";
    if (randomNumber1 > randomNumber2) {
        winner = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        winner = "Player 2 Wins!";
    } else {
        winner = "Draw!";
    }

    document.querySelector("h1").innerHTML = winner;
}
