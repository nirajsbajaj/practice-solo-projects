let scoreNumHome = document.getElementById("score-num-home");
let scoreNumGuest = document.getElementById("score-num-guest");

let homeScore = 0
let guestScore = 0;

function increment(team, value) {
    if (team === 'home') {
        homeScore += value;
        scoreNumHome.innerText = homeScore;
    } else if (team === 'guest') {
        guestScore +=value;
        scoreNumGuest.innerText = guestScore;
    }
}

function reset(team) {
    if (team === 'home') {
        scoreNumHome.innerText = 0;
    } else if (team === 'guest'){
        scoreNumGuest.innerText = 0;
    }
}