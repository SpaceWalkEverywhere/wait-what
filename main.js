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
    cam="on";}
    lwy=20;
    rwx=0;
    rwy=0;
function draw(){
    if(cam=="on"){
        background(bgR,bgG,bgB);
        fill(cR,cG,cB);
        rect(rwx,rwy,lwy,lwy);
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
        rwy=result[0].pose.rightWrist.y;
        }
        else{
        rwx=10;
        rwy=10;
        }
        
        if(result[0].pose.leftWrist.confidence.toFixed(2)>0.50){
        lwy=result[0].pose.leftWrist.y;
        }
        else{
            lwy=100;
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