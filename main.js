song_1 = "";
song_2 = "";
function setup(){
   canvas = createCanvas(600,500);
   canvas.center();
}
function preload(){
   song_1 = loadSound("on my way.mp3");
   song_2 = loadSound("stay.mp3")
   video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function draw(){
   image(video, 0, 0, 600, 500);
}