(() => {
    function addClasses(event) {
        let container = event.currentTarget;
        container.querySelector(".social-hidden-list")?.classList.add("social-hidden-list-hidden");
        container.querySelector(".social-hidden-list-listen")?.classList.add("social-hidden-list-hidden");
        container.querySelector(".footer-menu-desc")?.classList.add("footer-menu-desc-hidden");
        container.querySelector(".footer-svg-anim")?.classList.add("footer-svg-anim-hidden");
        container.querySelector(".footer-menu-desc-listen")?.classList.add("footer-menu-desc-listen-hidden");
    }

    function removeClasses(event) {
        let container = event.currentTarget;
        container.querySelector(".social-hidden-list")?.classList.remove("social-hidden-list-hidden");
        container.querySelector(".social-hidden-list-listen")?.classList.remove("social-hidden-list-hidden");
        container.querySelector(".footer-menu-desc")?.classList.remove("footer-menu-desc-hidden");
        container.querySelector(".footer-svg-anim")?.classList.remove("footer-svg-anim-hidden");
        container.querySelector(".footer-menu-desc-listen")?.classList.remove("footer-menu-desc-listen-hidden");
    }

    let divs = document.querySelectorAll(".footer-anim-container");
    divs.forEach(div => {
        div.addEventListener("mouseover", addClasses);
        div.addEventListener("mouseout", removeClasses);
    });
})();



///


let audio = document.getElementById('audio');
let progressContainer = document.querySelector('.progress-container');
let progress = document.getElementById('progress');
let playPauseBtn = document.getElementById('playPauseBtn');
let currentTimeSpan = document.getElementById('currentTime');
let durationSpan = document.getElementById('duration');
let ues = document.getElementById("audio-use");

playPauseBtn.addEventListener("click", function () {
    togglePlayPause();
})

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', () => {
    durationSpan.textContent = formatTime(audio.duration);
});

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        ues.setAttribute('xlink:href', `#play`);
    } else {
        audio.pause();
        ues.setAttribute('xlink:href', `#stop`);
    }
}

function updateProgress() {
    let { duration, currentTime } = audio;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeSpan.textContent = formatTime(currentTime);
}

function setProgress(event) {
    let width = progressContainer.clientWidth;
    let clickX = event.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}





