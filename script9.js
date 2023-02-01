const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressontainer = document.querySelector('#title');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
let x;
//song titles

const song = ['1-Depeche Mode - Here Is The House', '2 -The Smashing Pumpkins - Ava Adore', '3-The Cure - Lullaby'];

//keep track of song
let songIndex = 0;

//Initial load song in to  DOM
loadSong(song[songIndex]);

//Update song details

let idSong;

function loadSong(song) {

    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    let file = audio.src;
    cover.src = `images/${song}.jpg `;
    console.log('La canción que suena es' + song + 'y tiene el indice ' + songIndex);
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
    console.log(songIndex);
    switch (songIndex) {

        case 0:
            //   $('#song0').append('<i class="fas fa-play "></i>');
            $('#song0').html('1-Depeche Mode - Here Is The House  <i class="fas fa-play "></i>');
            $('#song1').html('2 -The Smashing Pumpkins - Ava Adore');
            $('#song2').html('3-The Cure - Lullaby');
            break;

        case 1:
            $('#song0').html('1-Depeche Mode - Here Is The House');
            $('#song1').html('2 -The Smashing Pumpkins - Ava Adore <i class="fas fa-play "></i>');
            $('#song2').html('3-The Cure - Lullaby');
            break;

        case 2:
            $('#song0').html('1-Depeche Mode - Here Is The House');
            $('#song1').html('2 -The Smashing Pumpkins - Ava Adore');
            $('#song2').html('3-The Cure - Lullaby <i class="fas fa-play ">');
            break;

    }
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
    switch (songIndex) {

        case 0:

            $('#song0').html('1-Depeche Mode - Here Is The House  <i class="fas fa-pause "></i>');

            break;

        case 1:

            $('#song1').html('2 -The Smashing Pumpkins - Ava Adore <i class="fas fa-pause "></i>');

            break;

        case 2:

            $('#song2').html('3-The Cure - Lullaby<i class="fas fa-pause "></i>');
            break;

    }
}
console.log(songIndex);

// Previous song
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = song.length - 1;
    }

    loadSong(song[songIndex]);

    playSong();
}

// Next song
function nextSong() {
    songIndex++;

    if (songIndex > song.length - 1) {
        songIndex = 0;
    }

    loadSong(song[songIndex]);

    playSong();
}

function updateProgress(e) {

    let CT = e.srcElement.currentTime;
    let dur = e.srcElement.duration;


    console.log('Tiempo Actual:' + CT + 'Duración: ' + dur);
    if (CT === dur) {

        nextSong();
    }

}
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();

    } else
        playSong();
})

//Change song evens
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);