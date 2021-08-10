function setup(){
    vid=createCapture(VIDEO);
    vid.size(600,360);
    vid.position(10,150);
    can=createCanvas(640,360);
    can.position(630,150);
    mll=ml5.poseNet(vid,ml);
    mll.on('pose',gotposes);
    bgR=Math.floor(Math.random()*256);
    bgG=Math.floor(Math.random()*256);
    bgB=Math.floor(Math.random()*256);
    cR=Math.floor(Math.random()*256);
    cG=Math.floor(Math.random()*256);
    cB=Math.floor(Math.random()*256);
    cam="on";
    rwx=10;
    lwx=20;
    nx=10;
    ny=10;
    differance=floor(lwx-rwx);
}
function draw(){
    if(cam=="on"){
        background(bgR,bgG,bgB);
        fill(cR,cG,cB);
        rect(nx,ny,differance,differance);
    }
    else{
        fill(255,255,255);
        rect(0,0,640,630);
    }
}
function ml(){
    console.log('woohoo model loaded!!!!!!!!!!!!!!!!!!')
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        if(result[0].pose.rightWrist.confidence.toFixed(2)>0.50){
        rwx=result[0].pose.rightWrist.x;
        lwx=result[0].pose.leftWrist.x;
        nx=result[0].pose.nose.x;
        ny=result[0].pose.nose.y;
        differance=floor(lwx-rwx);
        }
        else{
        rwx=10;
        lwx=10;
        nx=10;
        ny=10;
        }
    }
    else{
        console.error("error")
    }
}    
function changedacolor(){
    bgR=Math.floor(Math.random()*256);
    bgG=Math.floor(Math.random()*256);
    bgB=Math.floor(Math.random()*256);
    cR=Math.floor(Math.random()*256);
    cG=Math.floor(Math.random()*256);
    cB=Math.floor(Math.random()*256);   
}
function on(){
    if(cam=="on"){
        document.getElementById("camm").innerHTML="Cam On";
        vid.hide();
        can.position(315,150);
        cam="off";
    }
    else{
        document.getElementById("camm").innerHTML="Cam Off";
        vid.show();
        can.position(630,150);
        cam="on";
    }
}