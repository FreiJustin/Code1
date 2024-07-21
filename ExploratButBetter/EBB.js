"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const crc = canvas.getContext("2d");
//Arrays
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const cableColors = ["red", "blue", "yellow", "black", "white", "#444444", "#444444"];
const buttonColors = ["red", "blue", "yellow", "white"];
const buttonText = ["Push", "Hold", "Wait", " ", "Nothing"];
const moduleType = ["button", "cable", "morse"];
const modulesInOrder = [];
const moduleData = [[], [], [], [], [], []];
const morseModules = [];
const morseId = ["cheese", "chest", "rattus", "resting", "sleep", "stinky", "steal", "running", "sniff", "dizzy"];
const chosenMorseIds = [];
crc.lineWidth = 2;
//ClickListener
var currentDate = new Date();
var weekday = days[currentDate.getDay()];
console.log(weekday);
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
    console.log("clikced module " + moduleClicked.toString() + ". This is a " + modulesInOrder[moduleClicked] + " Module.");
    console.log("The Modules Data is: " + moduleData[moduleClicked]);
    switch (modulesInOrder[moduleClicked]) {
        case "cable":
        case "button":
            if (weekday == 'Thursday' || weekday == 'Tuesday' || weekday == 'Saturday' || weekday == 'Sunday') {
                console.log("correct!");
            }
            else {
                console.log("False!");
            }
            break;
    }
}
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
for (let k = 0; k < 6; k++) {
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
            let cableColor = cableColors[Math.floor(Math.random() * 7)];
            crc.strokeStyle = cableColor;
            crc.beginPath();
            crc.lineWidth = 10;
            crc.moveTo(module * 300 + 40, j * 27 + 40);
            crc.lineTo(module * 300 + 280, j * 27 + 40);
            crc.stroke();
            crc.closePath();
            moduleData[module].push(cableColor);
            if (crc.strokeStyle == "#444444") {
            }
            else {
                crc.strokeStyle = "black";
                crc.lineWidth = 2;
                crc.strokeRect(module * 300 + 40, j * 27 + 34, 240, 10);
            }
        }
        else {
            let cableColor = cableColors[Math.floor(Math.random() * 6)];
            crc.strokeStyle = cableColor;
            crc.beginPath();
            crc.lineWidth = 10;
            crc.moveTo((module - 3) * 300 + 40, j * 27 + 240);
            crc.lineTo((module - 3) * 300 + 280, j * 27 + 240);
            crc.stroke();
            crc.closePath();
            moduleData[module].push(cableColor);
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
    moduleData[module].push(chosenText);
    if (module < 3) {
        crc.beginPath();
        crc.ellipse(module * 300 + 155, 110, 70, 70, 0, Math.PI * 180, Math.PI * 90, true);
        let buttonColor = buttonColors[Math.floor(Math.random() * 4)];
        crc.fillStyle = buttonColor;
        moduleData[module].push(buttonColor);
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
        let buttonColor = buttonColors[Math.floor(Math.random() * 4)];
        crc.fillStyle = buttonColor;
        moduleData[module].push(buttonColor);
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
function findMorse() {
    for (let i = 0; i < modulesInOrder.length; i++) {
        if (modulesInOrder[i] == "morse") {
            morseModules.push(i);
        }
    }
}
function getMorseId() {
    return morseId[Math.floor(Math.random() * 10)];
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
    let thisMorseId = getMorseId();
    moduleData[modula].push(thisMorseId);
    chosenMorseIds.push(thisMorseId);
}
findMorse();
let frame = 0;
let cheeseFrame = 0;
let chestFrame = 0;
let rattusFrame = 0;
let restingFrame = 0;
function morseBlink() {
    frame++;
    cheeseFrame++;
    chestFrame++;
    rattusFrame++;
    restingFrame++;
    let column = 0;
    let row = 0;
    for (let i = 0; i < morseModules.length; i++) {
        if (morseModules[i] >= 3) {
            column = morseModules[i] - 3;
            row = 1;
        }
        if (morseModules[i] < 3) {
            column = morseModules[i];
            row = 0;
        }
        function lightOn(col, ro) {
            crc.clearRect((col * 300) + 125, ro * 200 + 40, 70, 50);
            crc.fillStyle = "yellow";
            crc.fillRect((col * 300) + 125, ro * 200 + 40, 70, 50);
            crc.strokeStyle = "black";
            crc.strokeRect((col * 300) + 125, ro * 200 + 40, 70, 50);
        }
        function lightOff(col, ro) {
            crc.clearRect((col * 300) + 125, ro * 200 + 40, 70, 50);
            crc.fillStyle = "#999999";
            crc.fillRect((col * 300) + 125, ro * 200 + 40, 70, 50);
            crc.strokeStyle = "black";
            crc.strokeRect((col * 300) + 125, ro * 200 + 40, 70, 50);
        }
        switch (chosenMorseIds[i]) {
            //dots 40 frames dashes 80 frames. 40 frames blank is one space between letters, 80 frames blank is space between words,  frame 1500 is space between cycles
            case "cheese":
                //dash
                if (cheeseFrame == 10) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 90) {
                    lightOff(column, row);
                }
                // dot   
                if (cheeseFrame == 130) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 170) {
                    lightOff(column, row);
                }
                //dash
                if (cheeseFrame == 210) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 290) {
                    lightOff(column, row);
                }
                //dot
                if (cheeseFrame == 330) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 370) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (cheeseFrame == 450 + 20) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 490 + 20) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (cheeseFrame == 570 + 40) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 610 + 40) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (cheeseFrame == 690 + 60) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 730 + 60) {
                    lightOff(column, row);
                }
                //dot
                if (cheeseFrame == 770 + 60) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 810 + 60) {
                    lightOff(column, row);
                }
                //dot
                if (cheeseFrame == 850 + 60) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 890 + 60) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (cheeseFrame == 970 + 80) {
                    lightOn(column, row);
                }
                if (cheeseFrame == 1010 + 80) {
                    lightOff(column, row);
                }
                if (cheeseFrame == 1390) {
                    cheeseFrame = 0;
                }
                break;
            case "chest":
                //dash
                if (chestFrame == 10) {
                    lightOn(column, row);
                }
                if (chestFrame == 90) {
                    lightOff(column, row);
                }
                // dot   
                if (chestFrame == 130) {
                    lightOn(column, row);
                }
                if (chestFrame == 170) {
                    lightOff(column, row);
                }
                //dash
                if (chestFrame == 210) {
                    lightOn(column, row);
                }
                if (chestFrame == 290) {
                    lightOff(column, row);
                }
                //dot
                if (chestFrame == 330) {
                    lightOn(column, row);
                }
                if (chestFrame == 370) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (chestFrame == 450 + 20) {
                    lightOn(column, row);
                }
                if (chestFrame == 490 + 20) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (chestFrame == 610) {
                    lightOn(column, row);
                }
                if (chestFrame == 650) {
                    lightOff(column, row);
                }
                //dot
                if (chestFrame == 690) {
                    lightOn(column, row);
                }
                if (chestFrame == 730) {
                    lightOff(column, row);
                }
                //dot
                if (chestFrame == 770) {
                    lightOn(column, row);
                }
                if (chestFrame == 810) {
                    lightOff(column, row);
                }
                //pause
                //dash
                if (chestFrame == 910) {
                    lightOn(column, row);
                }
                if (chestFrame == 990) {
                    lightOff(column, row);
                }
                if (chestFrame == 1290) {
                    chestFrame = 0;
                }
                break;
            case "rattus":
                //dot
                if (rattusFrame == 10) {
                    lightOn(column, row);
                }
                if (rattusFrame == 50) {
                    lightOff(column, row);
                }
                //dash
                if (rattusFrame == 90) {
                    lightOn(column, row);
                }
                if (rattusFrame == 170) {
                    lightOff(column, row);
                }
                //dot
                if (rattusFrame == 210) {
                    lightOn(column, row);
                }
                if (rattusFrame == 250) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (rattusFrame == 350) {
                    lightOn(column, row);
                }
                if (rattusFrame == 390) {
                    lightOff(column, row);
                }
                //dash
                if (rattusFrame == 430) {
                    lightOn(column, row);
                }
                if (rattusFrame == 510) {
                    lightOff(column, row);
                }
                //pause
                //dash
                if (rattusFrame == 610) {
                    lightOn(column, row);
                }
                if (rattusFrame == 690) {
                    lightOff(column, row);
                }
                //pause
                //dash
                if (rattusFrame == 790) {
                    lightOn(column, row);
                }
                if (rattusFrame == 870) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (rattusFrame == 970) {
                    lightOn(column, row);
                }
                if (rattusFrame == 1010) {
                    lightOff(column, row);
                }
                //dot
                if (rattusFrame == 1050) {
                    lightOn(column, row);
                }
                if (rattusFrame == 1090) {
                    lightOff(column, row);
                }
                //dash
                if (rattusFrame == 1130) {
                    lightOn(column, row);
                }
                if (rattusFrame == 1210) {
                    lightOff(column, row);
                }
                //pause
                //dot
                if (rattusFrame == 1310) {
                    lightOn(column, row);
                }
                if (rattusFrame == 1350) {
                    lightOff(column, row);
                }
                //dot
                if (rattusFrame == 1390) {
                    lightOn(column, row);
                }
                if (rattusFrame == 1430) {
                    lightOff(column, row);
                }
                //dot
                if (rattusFrame == 1470) {
                    lightOn(column, row);
                }
                if (rattusFrame == 1510) {
                    lightOff(column, row);
                }
                if (rattusFrame == 1810) {
                    rattusFrame = 0;
                }
                break;
            case "resting":
                if (restingFrame == 10) {
                }
        }
    }
    requestAnimationFrame(morseBlink);
}
requestAnimationFrame(morseBlink);
