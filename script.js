console.log("Welcome to Spotfiy");

let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", totalTime: "05:30" },
    { songName: "Song 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", totalTime: "02:30" },
    { songName: "Song 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", totalTime: "03:30" },
    { songName: "Song 4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", totalTime: "04:30" },
    { songName: "Song 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", totalTime: "01:30" },
    { songName: "Song 6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", totalTime: "06:30" },
    { songName: "Song 7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", totalTime: "07:30" },
    { songName: "Song 8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", totalTime: "08:30" },
    { songName: "Song 9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", totalTime: "09:30" },
    { songName: "Song 10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", totalTime: "10:30" },
]
// audioElement.play();
songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("timeStamp")[0].innerText = songs[i].totalTime;
})

masterPlay.addEventListener(
    'click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
            gif.style.opacity = 0;
        }
    }
)
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
    element.addEventListener('click' , (e)=>{
        console.log(e);
    })
})