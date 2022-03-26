
leftWristX =0;
rightWristX =0;
diffrence =0;

function setup() {
canvas =createCanvas(800, 550);
canvas.position(550, 100)

video= createCapture(VIDEO);
video.size(500, 500);

posenet =ml5.poseNet(video, modelLoaded)
posenet.on("pose", gotPoses);
}

function draw() {
background("burlywood") 
document.getElementById("font-size").innerHTML ="Font Size of the text will be = " +diffrence +"px";
fill("Hotpink");
textSize(diffrence);
text("Mahathi",50,400)
}

function modelLoaded() {
    console.log("Posenet is Intialized");
}

function gotPoses(results) {
    if(results.length >0) {
        console.log(results);

   leftWristX =results[0].pose.leftWrist.x;
   rightWristX =results[0].pose.rightWrist.x;
  diffrence = floor(leftWristX - rightWristX);

  
    }
}


