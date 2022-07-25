console.log("Welcome to Spotfiy");

let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songTitle = document.getElementById('songTitle');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let currentSongIndex = 0;

let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", totalTime: "03:50" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", totalTime: "02:33" },
    { songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", totalTime: "04:33" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", totalTime: "04:27" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", totalTime: "03:28" },
    { songName: "Imagine Dragons - Bones", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", totalTime: "02:45" },
    { songName: "Imagine Dragons - Sharks", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", totalTime: "03:10" },
    { songName: "Imagine Dragons - Bad Liar", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", totalTime: "04:20" },
    { songName: "Imagine Dragons - Demons", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", totalTime: "04:02" },
    { songName: "Let Me Love You", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", totalTime: "03:25" },
]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timeStamp")[0].innerText = songs[i].totalTime;
})

function playaudio() {
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
}

function pauseaudio() {
    audioElement.pause();
    masterPlay.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
    gif.style.opacity = 0;
}


masterPlay.addEventListener(
    'click', () => {
        makeAllPlays();
        if (audioElement.paused || audioElement.currentTime <= 0) {
            playaudio();
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
                if (currentSongIndex == i) {
                    element.classList.remove('fa-play');
                    element.classList.add('fa-pause');
                }
            })
        }
        else {
            pauseaudio();
        }
    }
)

function changeSongWithIcon() {
    // myProgressBar.value = 0;
    audioElement.pause();
    audioElement = new Audio(songs[currentSongIndex].filePath);
    playaudio();
    makeAllPlays();

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
        if (currentSongIndex == i) {
            element.classList.remove('fa-play');
            element.classList.add('fa-pause');
        }
    })

    songTitle.innerText = songs[currentSongIndex].songName;

}

previous.addEventListener('click', () => {
    if (currentSongIndex == 0) {
        currentSongIndex = songs.length - 1;
    }
    else {
        currentSongIndex = currentSongIndex - 1;
    }
    changeSongWithIcon();
})


next.addEventListener('click', () => {
    if (currentSongIndex == songs.length - 1) {
        currentSongIndex = 0;
    }
    else {
        currentSongIndex = currentSongIndex + 1;
    }
    changeSongWithIcon();
})

audioElement.addEventListener('timeupdate', () => {
    progress = (audioElement.currentTime / audioElement.duration) * 100;
    console.log("Progress " + progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {

        // converts all icon into play icon
        if (e.target.classList == 'far songItemPlay fa-2x fa-solid fa-pause') {
            // means user is requesting to pause the song
            pauseaudio();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
        }
        else {
            currentSongIndex = parseInt(e.target.id);
            changeSongWithIcon();
        }
    })
})


