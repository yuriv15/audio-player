let song = document.getElementById("song1");
let play_pause = document.getElementById("play_pause");

function play(){
    song.play();
    play_pause.src = "./assets/images/pause.svg";
    play_pause.onclick = pause;
}

function pause(){
    song.pause();
    play_pause.src = "./assets/images/play.svg";
    play_pause.onclick = play;
}

function stop(){
    song.pause();
    song.currentTime = 0;
    play_pause.src = "./assets/images/play.svg";
    play_pause.onclick = play;
}

function fast_rewind(){
    song.playbackRate -= 0.1;
}

function fast_foward(){
    song.playbackRate += 0.1;
}

function replay_10(){
    song.currentTime -=0.1;
}

function foward_10(){
    song.currentTime += 10;
}

function volume_down(){
    song.volume-=0.1;
}

function volume_up(){
    song.volume+=0.1;
}