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


// let audio = document.querySelector('audio');
// let progressContainer = document.querySelector('.progress-container');
// let progress = document.getElementById('progress');
// let playPauseBtn = document.getElementById('playPauseBtn');
// let currentTimeSpan = document.getElementById('currentTime');
// let durationSpan = document.getElementsByClassName('duration');
// let ues = document.getElementById("audio-use");

// playPauseBtn.addEventListener("click", function () {
//     togglePlayPause();
// })

// audio.addEventListener('timeupdate', updateProgress);
// audio.addEventListener('loadedmetadata', () => {
//     durationSpan.textContent = formatTime(audio.duration);
// });

// function togglePlayPause() {
//     if (audio.paused) {
//         audio.play();
//         ues.setAttribute('xlink:href', `#play`);
//     } else {
//         audio.pause();
//         ues.setAttribute('xlink:href', `#stop`);
//     }
// }

// function updateProgress() {
//     let { duration, currentTime } = audio;
//     let progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;
//     currentTimeSpan.textContent = formatTime(currentTime);
// }

// function setProgress(event) {
//     let width = progressContainer.clientWidth;
//     let clickX = event.offsetX;
//     let duration = audio.duration;
//     audio.currentTime = (clickX / width) * duration;
// }

// function formatTime(time) {
//     let minutes = Math.floor(time / 60);
//     let seconds = Math.floor(time % 60);
//     if (seconds < 10) {
//         seconds = `0${seconds}`;
//     }
//     return `${minutes}:${seconds}`;
// }






let audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach(player => {
    let audio = player.querySelector('.audio');
    let playPauseBtn = player.querySelector('.playPauseBtn');
    let progress = player.querySelector('.progress');
    let currentTimeSpan = player.querySelector('.currentTime');
    let durationSpan = player.querySelector('.duration');
    let useIcon = player.querySelector('.audio-use');
    let progressContainer = player.querySelector('.progress-container');

    // Встановлюємо початкову тривалість аудіо
    audio.addEventListener('loadedmetadata', () => {
        durationSpan.textContent = formatTime(audio.duration);
    });

    // Відтворення/пауза
    playPauseBtn.addEventListener('click', () => {
        togglePlayPause(audio, useIcon);
    });

    // Оновлення прогресу
    audio.addEventListener('timeupdate', () => {
        updateProgress(audio, progress, currentTimeSpan);
    });

    // Зміна позиції відтворення
    progressContainer.addEventListener('click', (event) => {
        setProgress(event, audio, progressContainer);
    });
});

function togglePlayPause(audio, useIcon) {
    if (audio.paused) {
        audio.play();
        useIcon.setAttribute('xlink:href', '#stop');
    } else {
        audio.pause();
        useIcon.setAttribute('xlink:href', '#play');
    }
}

function updateProgress(audio, progress, currentTimeSpan) {
    let { duration, currentTime } = audio;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeSpan.textContent = formatTime(currentTime);
}

function setProgress(event, audio, progressContainer) {
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