let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
let crcb: CanvasRenderingContext2D = canvas.getContext("2d")!;

crcb.fillStyle = "#eeaf61"
crcb.fillRect(0,0,1500,700);
crcb.fillStyle = "#ee5d6c";
crcb.beginPath();
crcb.ellipse(Math.random() * 1500,250,200,200,0,Math.PI * 180, Math.PI * 90,true);
crcb.fill();
crcb.closePath();
crcb.fillStyle = "#afe1e3"
crcb.fillRect(0,250,1500,1000);
crcb.fillStyle = "#fdeab7";
crcb.fillRect(0,400,1500,1000);

for(let c = 0; c < 4 ; c++){
crcb.fillStyle = "white";
crcb.beginPath();
let rndmx = Math.random();
crcb.ellipse(100 + rndmx*1300,100 + Math.random() * 50 ,30 + Math.random()*50,20 + Math.random()*10,0,Math.PI*180,Math.PI*90);
crcb.ellipse(100 + rndmx*1300 + 20,100 + Math.random() * 50 ,40 + Math.random()*50,40 + Math.random()*10,0,Math.PI*180,Math.PI*90);
crcb.fill();
crcb.closePath();
}

crcb.fillStyle = "brown";