const removeBtnEl = document.getElementById("remove-btn");
const countTextEl = document.getElementById("count-text");
const addBtnEl = document.getElementById("add-btn");

const addSound = new Audio("assets/sounds/start.mp3");
const removeSound = new Audio("assets/sounds/Pop.mp3");


//Sound
addSound.preload = "auto";
removeSound.preload = "auto";

addSound.volume = 0.5;
removeSound.volume = 0.5;

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {
        console.error("Audio failed to play", error);
    });
}

let count = 0;

function render() {
    countTextEl.textContent = String(count);
}

function increment() {
    count += 1;
    render();
    playSound(addSound);
}

function decrement() {
    if(count > 0) {
        count -= 1;
        render();
        playSound(removeSound);
    }
}

addBtnEl.addEventListener('click', increment);
removeBtnEl.addEventListener('click', decrement);

render();