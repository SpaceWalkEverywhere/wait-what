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
}
function draw(){
    background(bgR,bgG,bgB);
    //console.log("im working");
    fill(cR,cG,cB);
    rect(10,10,300,300);

}
function ml(){
    console.log('woohoo model loaded!!!!!!!!!!!!!!!!!!')
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
    }
}
