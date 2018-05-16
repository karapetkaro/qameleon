var r,g,b;

function setup() {
    frameRate(5);
    createCanvas(500, 500);
    background('#acacac');
    r = random(255);
    g = random(255);
    b = random(255);
}

function mouseDragged() {
  console.log(mouseX, mouseY);
 
  socket.emit("kordinat",[mouseX, mouseY,r,g,b]);
}

function main() {
    socket = io.connect('http://localhost:8080');
    socket.on("gciq",elips);

    
    function elips (data){
        fill(data[2],data[3],data[4]);
        ellipse(data[0],data[1],30,30);
    }
} // main closing bracket

window.onload = main;
