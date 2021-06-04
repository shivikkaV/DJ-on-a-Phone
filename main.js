song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Into_the_unknown.mp3");
    song2 = loadSound("CupSong.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function frozen_play(){
    song1.play();
  }
  
  function frozen_pause(){
    song1.pause();
  }
  
  function frozen_stop(){
    song1.stop();
  }
  
  function cup_song_play(){
    song2.play();
  }
  
  function cup_song_pause(){
    song2.pause();
  }
  
  function cup_song_stop(){
    song2.stop();
  }