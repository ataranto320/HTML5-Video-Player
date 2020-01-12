// Get our elements 
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const porgressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build out functions 
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}
// function togglePLay() {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// }

function updateButton() {
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
    // console.log("Update the button");
}


// Hook up the eventlisteners 
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);
