"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const crc = canvas.getContext("2d");
//ClickListener
canvas.addEventListener("click", checkClickedModule);
function checkClickedModule(_event) {
    console.log("click");
    let moduleClicked = 99;
    //check for x position
    for (let i = 0; i < 3; i++) {
        if (_event.offsetX > i * 300 + 20 && _event.offsetX < i * 300 + 20 + 280) {
            moduleClicked = i;
        }
    }
    //check for y position
    for (let j = 0; j < 2; j++) {
        if (_event.offsetY > (j * 200) + 20 && _event.offsetY < (j * 200) + 200) {
            moduleClicked += (j * 3);
        }
    }
    console.log("clikced module " + moduleClicked.toString());
}
//Arrays
const cableColors = ["red", "blue", "yellow", "black", "white", "#444444", "#444444"];
const buttonColors = ["red", "blue", "yellow", "white"];
const buttonText = ["Push", "Hold", "Wait", " ", "Nothing"];
const moduleType = ["button", "cable", "morse"];
const modulesInOrder = [];
//where should the modulas be?
crc.fillStyle = "#999999";
crc.fillRect(10, 10, 900, 400);
crc.strokeStyle = "black";
crc.lineWidth = 2;
crc.strokeRect(10, 10, 900, 400);
crc.fillStyle = "#444444";
for (let i = 0; i < 6; i++) {
    if (i < 3) {
        crc.fillRect((i * 300) + 20, 20, 280, 180);
        crc.strokeStyle = "black";
        crc.lineWidth = 2;
        crc.strokeRect((i * 300) + 20, 20, 280, 180);
    }
    if (i >= 3) {
        crc.fillRect((i - 3) * 300 + 20, 220, 280, 180);
        crc.strokeStyle = "black";
        crc.lineWidth = 2;
        crc.strokeRect((i - 3) * 300 + 20, 220, 280, 180);
    }
}
// test for cable layout
for (let k = 0; k < 6; k++) {
    //let moduleChosen:string = moduleType[Math.floor(Math.random()*2)];
    let moduleChosen = moduleType[Math.floor(Math.random() * 3)];
    switch (moduleChosen) {
        case "button":
            buildButton(k);
            modulesInOrder.push("button");
            break;
        case "cable":
            buildCables(k);
            modulesInOrder.push("cable");
            break;
        case "morse":
            morseCode(k);
            modulesInOrder.push("morse");
            break;
    }
}
for (let i = 0; i < modulesInOrder.length; i++) {
    console.log(modulesInOrder[i]);
}
function randomModulaType() {
    return Math.floor(Math.random() * 2);
}
function buildCables(module) {
    for (let j = 0; j < 6; j++) {
        if (module < 3) {
            crc.fillStyle = "#444444";
            crc.strokeStyle = cableColors[Math.floor(Math.random() * 7)];
            crc.beginPath();
            crc.lineWidth = 10;
            crc.moveTo(module * 300 + 40, j * 27 + 40);
            crc.lineTo(module * 300 + 280, j * 27 + 40);
            crc.stroke();
            crc.closePath();
            if (crc.strokeStyle == "#444444") {
            }
            else {
                crc.strokeStyle = "black";
                crc.lineWidth = 2;
                crc.strokeRect(module * 300 + 40, j * 27 + 34, 240, 10);
            }
        }
        else {
            crc.strokeStyle = cableColors[Math.floor(Math.random() * 6)];
            crc.beginPath();
            crc.lineWidth = 10;
            crc.moveTo((module - 3) * 300 + 40, j * 27 + 240);
            crc.lineTo((module - 3) * 300 + 280, j * 27 + 240);
            crc.stroke();
            crc.closePath();
            if (crc.strokeStyle == "#444444") {
            }
            else {
                crc.strokeStyle = "black";
                crc.lineWidth = 2;
                crc.strokeRect((module - 3) * 300 + 40, j * 27 + 234, 240, 10);
            }
        }
    }
}
function buildButton(module) {
    let chosenText = buttonText[Math.floor(Math.random() * 5)];
    if (module < 3) {
        crc.beginPath();
        crc.ellipse(module * 300 + 155, 110, 70, 70, 0, Math.PI * 180, Math.PI * 90, true);
        crc.fillStyle = buttonColors[Math.floor(Math.random() * 4)];
        crc.fill();
        crc.strokeStyle = "black";
        crc.lineWidth = 2;
        crc.stroke();
        crc.fillStyle = "black";
        crc.font = "50px Comic Sans MS";
        switch (chosenText) {
            case "Push":
                crc.fillText(chosenText, (module) * 300 + 105, 125);
                crc.closePath();
                break;
            case "Wait":
                crc.fillText(chosenText, (module) * 300 + 100, 125);
                crc.closePath();
                break;
            case "Hold":
                crc.fillText(chosenText, (module) * 300 + 100, 125);
                crc.closePath();
                break;
            case "Nothing":
                crc.font = "35px Comic Sans MS";
                crc.fillText(chosenText, (module) * 300 + 90, 120);
                crc.closePath();
                break;
            default:
                crc.fillText(chosenText, (module) * 300 + 105, 125);
                crc.closePath();
                break;
        }
    }
    else {
        crc.beginPath();
        crc.ellipse((module - 3) * 300 + 155, 310, 70, 70, 0, Math.PI * 180, Math.PI * 90, true);
        crc.fillStyle = buttonColors[Math.floor(Math.random() * 4)];
        crc.fill();
        crc.strokeStyle = "black";
        crc.lineWidth = 2;
        crc.stroke();
        crc.fillStyle = "black";
        crc.font = "50px Comic Sans MS";
        switch (chosenText) {
            case "Push":
                crc.fillText(chosenText, (module - 3) * 300 + 105, 325);
                crc.closePath();
                break;
            case "Wait":
                crc.fillText(chosenText, (module - 3) * 300 + 100, 325);
                crc.closePath();
                break;
            case "Hold":
                crc.fillText(chosenText, (module - 3) * 300 + 100, 325);
                crc.closePath();
                break;
            case "Nothing":
                crc.font = "35px Comic Sans MS";
                crc.fillText(chosenText, (module - 3) * 300 + 90, 325);
                crc.closePath();
                break;
            default:
                crc.fillText(chosenText, (module - 3) * 300 + 105, 325);
                crc.closePath();
                break;
        }
    }
}
//Morse frame counting
requestAnimationFrame(morse);
let frame = 0;
function morse() {
    frame++;
    //console.log("this is frame"+frame);
    requestAnimationFrame(morse);
}
function morseCode(modula) {
    let row = 0;
    let newmodula = modula;
    if (modula >= 3) {
        row = 1;
        newmodula -= 3;
    }
    crc.fillStyle = "#999999";
    crc.fillRect((newmodula * 300) + 125, row * 200 + 40, 70, 50);
    crc.strokeStyle = "black";
    crc.lineWidth = 2;
    crc.fillStyle = buttonColors[Math.floor(Math.random() * 4)];
    crc.fillRect(newmodula * 300 + 195, row * 200 + 55, 105, 20);
    crc.fillStyle = buttonColors[Math.floor(Math.random() * 4)];
    crc.fillRect(newmodula * 300 + 125, row * 200 + 55, -105, 20);
    crc.strokeRect(newmodula * 300 + 125, row * 200 + 40, 70, 50);
    crc.strokeRect(newmodula * 300 + 195, row * 200 + 55, 105, 20);
    crc.strokeRect(newmodula * 300 + 125, row * 200 + 55, -105, 20);
    crc.fillStyle = "#BCAA22";
    crc.fillRect(newmodula * 300 + 100, row * 200 + 105, 120, 80);
    crc.strokeRect(newmodula * 300 + 100, row * 200 + 105, 120, 80);
    crc.beginPath();
    crc.moveTo(newmodula * 300 + 90, row * 200 + 105);
    crc.lineTo(newmodula * 300 + 90, row * 200 + 185);
    crc.lineTo(newmodula * 300 + 50, row * 200 + 145);
    crc.closePath();
    crc.fillStyle = "white";
    crc.fill();
    crc.stroke();
    crc.beginPath();
    crc.moveTo(newmodula * 300 + 230, row * 200 + 105);
    crc.lineTo(newmodula * 300 + 230, row * 200 + 185);
    crc.lineTo(newmodula * 300 + 270, row * 200 + 145);
    crc.closePath();
    crc.fill();
    crc.stroke();
    crc.fillStyle = "black";
    crc.font = "60px Comic Sans MS";
    crc.fillText("1", newmodula * 300 + 145, row * 200 + 165);
}
