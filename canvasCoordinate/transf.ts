const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const crcx: CanvasRenderingContext2D = canvas.getContext("2d")!;

crcx.fillStyle = "black";
crcx.moveTo(0,0);
crcx.lineTo(200, 0);
crcx.moveTo(0,0);
crcx.lineTo(0, 200);

for(let i = 0; i < 20; i++){
    crcx.moveTo(i*10,0);
    crcx.lineTo(i*10,5);
    crcx.moveTo(0,i*10);
    crcx.lineTo(5,i*10);
}
crcx.stroke();

crcx.fillStyle = "#FF00FF";
crcx.translate(400,100);
crcx.scale(2,1);
crcx.rotate(Math.PI/7);
crcx.fillRect(10, 10, 100, 100);
crcx.fillRect(-100,10,90,100);
let trans1:DOMMatrix = crcx.getTransform();
crcx.translate (0,0);
crcx.scale(1,1);
crcx.rotate(0);
crcx.fillStyle="#FF0F0F";

for(let j = 0; j < 10; j++){
    crcx.fillStyle = crcx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`
    crcx.fillRect(100,100,40,40);
    crcx.rotate(Math.PI / 18);
    crcx.getTransform();
}

//crcx.setTransform(trans1);
//crcx.fillRect(10,10,100,100);

