const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const crc1: CanvasRenderingContext2D = canvas.getContext("2d")!;

console.log("hello");
crc1.rect(40,40,300,300);
crc1.fillStyle = "#00FF03";
crc1.lineWidth = 10;
crc1.stroke();
crc1.fillRect(45,45,290,290);
crc1.fillStyle = "black";
crc1.fillRect(90,100,80,80);
crc1.fillRect(210,100,80,80);
crc1.fillRect(130,210,120,50);
crc1.fillRect(220,240,50,50);
crc1.fillRect(110,240,50,50);
