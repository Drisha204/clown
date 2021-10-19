 nosex=0;
 nosey=0;
 
 function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function modelLoaded()
{
console.log('modelisloaded');
}
function draw()
{
    image(video,0,0.300,300);
   image(clown,nosex,nosey,30,30);
}
function take_snapshot()
{
    save("clown.png");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x+15;
        nosey=results[0].pose.nose.y+15;
        console.log("nose x="+nosex);
        console.log("nose y="+nosey);
    }
}
function preload()
{
    clown=loadImage('https://i.postimg.cc/g0gwqRfT/580b57fbd9996e24bc43bed5.png');
}