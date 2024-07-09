const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const crc: CanvasRenderingContext2D = canvas.getContext("2d")!;

//BombPosition



//Arrays
const cableColors:string[]= ["red","blue","yellow","black","white","#444444", "#444444"];
const buttonColors:string[]= ["red","blue","yellow","white"];
const buttonText:string[]= ["Push","Hold","Wait"," ", "Nothing"]
const moduleType:string[]=["button", "cable"]
//where should the modulas be?
crc.fillStyle = "#999999";
crc.fillRect(10,10,900,400);
crc.strokeStyle="black";
crc.lineWidth=2;
crc.strokeRect(10,10,900,400);

crc.fillStyle = "#444444";
for(let i = 0; i<6 ; i++){
    if(i < 3){
        crc.fillRect((i*300) + 20,20,280,180);
        crc.strokeStyle="black";
        crc.lineWidth=2;
        crc.strokeRect((i*300) + 20,20,280,180);
    }
    if(i >= 3){
        crc.fillRect((i-3)*300 + 20,220,280,180);
        crc.strokeStyle="black";
        crc.lineWidth=2;
        crc.strokeRect((i-3)*300 + 20,220,280,180);
    }
    }
// test for cable layout
for(let k = 0; k<6; k++){
    //let moduleChosen:string = moduleType[Math.floor(Math.random()*2)];
    let moduleChosen:string = "morse";
    switch(moduleChosen){
        case "button":
            buildButton(k);
            break;
        case "cable":
            buildCables(k);
            break;
        case "morse":
            morseCode(k);
            break;
    }
}


//what modulaType should the modula be? (0 = cables 1= button 2 = blind text)
function declareModulas():void{
let modula1 = randomModulaType();
let modula2 = randomModulaType();
let modula3 = randomModulaType();
let modula4 = randomModulaType();
let modula5 = randomModulaType();
}

function randomModulaType():number{
    return Math.floor(Math.random()*2);
}

function buildCables(module:number):void{
    for(let j = 0; j < 6 ; j++){    
        if(module<3){
            crc.fillStyle = "#444444";
            crc.strokeStyle = cableColors[Math.floor(Math.random()*7)];
            crc.beginPath();
            crc.lineWidth=10;
            crc.moveTo(module*300 +40, j*27 +40);
            crc.lineTo(module*300 + 280,j*27 +40);
            crc.stroke();
            crc.closePath();
            if(crc.strokeStyle == "#444444"){

            }
            else{
                crc.strokeStyle = "black";
                crc.lineWidth=2;
                crc.strokeRect(module*300 + 40,j*27 + 34, 240, 10)
            }
        }
        else{
            crc.strokeStyle = cableColors[Math.floor(Math.random()*6)];
            crc.beginPath();
            crc.lineWidth=10;
            crc.moveTo((module-3)*300 +40, j*27 +240);
            crc.lineTo((module-3)*300 + 280,j*27 +240);
            crc.stroke();
            crc.closePath();
            if(crc.strokeStyle=="#444444"){

            }
            else{
                crc.strokeStyle = "black";
                crc.lineWidth=2;
                crc.strokeRect((module-3)*300 + 40,j*27 + 234, 240, 10)
            }
        }
    }
}

function buildButton(module:number):void{
    let chosenText:string= buttonText[Math.floor(Math.random()*5)];
    if(module<3){
        crc.beginPath();
        crc.ellipse(module*300 +155,110,70,70,0,Math.PI*180,Math.PI*90,true);
        crc.fillStyle = buttonColors[Math.floor(Math.random()*4)];
        crc.fill();
        crc.strokeStyle="black";
        crc.lineWidth=2;
        crc.stroke();
        crc.fillStyle="black";
        crc.font = "50px Comic Sans MS";
        switch(chosenText){
            case "Push":
                crc.fillText(chosenText,(module)*300 +105,125);
                crc.closePath();
                break;
            case "Wait":    
                crc.fillText(chosenText,(module)*300 +100,125);
                crc.closePath();
                break;
            case "Hold":    
                crc.fillText(chosenText,(module)*300 +100,125);
                crc.closePath();
                break;
            case "Nothing":
                crc.font = "35px Comic Sans MS";
                crc.fillText(chosenText,(module)*300 +90,120);
                crc.closePath();
                break;
            default:    
                crc.fillText(chosenText,(module)*300 +105,125);
                crc.closePath();
                break;

            }
    }
    else{
        crc.beginPath();
        crc.ellipse((module-3)*300 +155,310,70,70,0,Math.PI*180,Math.PI*90,true);
        crc.fillStyle = buttonColors[Math.floor(Math.random()*4)];
        crc.fill();
        crc.strokeStyle="black";
        crc.lineWidth=2;
        crc.stroke();
        crc.fillStyle="black";
        crc.font = "50px Comic Sans MS";
        switch(chosenText){
            case "Push":
                crc.fillText(chosenText,(module-3)*300 +105,325);
                crc.closePath();
                break;
            case "Wait":    
                crc.fillText(chosenText,(module-3)*300 +100,325);
                crc.closePath();
                break;
            case "Hold":    
                crc.fillText(chosenText,(module-3)*300 +100,325);
                crc.closePath();
                break;
            case "Nothing":
                crc.font = "35px Comic Sans MS";
                crc.fillText(chosenText,(module-3)*300 +90,325);
                crc.closePath();
                break;
            default:    
                crc.fillText(chosenText,(module-3)*300 +105,325); 
                crc.closePath();
                break;
        }
    }
}

//Morse frame counting
requestAnimationFrame(morse);
let frame:number=0;

function morse():void{
    frame++;
    console.log("this is frame"+frame);
    requestAnimationFrame(morse);
}

function morseCode(modula:number):void{
    crc.fillStyle = "#999999";
    crc.fillRect(125,40,70,50);
    crc.strokeStyle = "black";
    crc.lineWidth=2;
    crc.strokeRect(125,40,70,50);
}