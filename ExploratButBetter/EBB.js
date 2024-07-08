"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const crc = canvas.getContext("2d");
//Arrays
const colors = ["red", "blue", "yellow", "black", "white", "#444444"];
//where should the modulas be?
crc.fillStyle = "#999999";
crc.fillRect(10, 10, 900, 400);
crc.fillStyle = "#444444";
for (let i = 0; i < 6; i++) {
    if (i < 3) {
        crc.fillRect((i * 300) + 20, 20, 280, 180);
    }
    if (i >= 3) {
        crc.fillRect((i - 3) * 300 + 20, 220, 280, 180);
    }
}
// test for cable layout
for (let k = 0; k < 6; k++) {
    buildCables(k);
}
//what modulaType should the modula be? (0 = cables 1= button 2 = blind text)
function declareModulas() {
    let modula1 = randomModulaType();
    let modula2 = randomModulaType();
    let modula3 = randomModulaType();
    let modula4 = randomModulaType();
    let modula5 = randomModulaType();
}
function randomModulaType() {
    return Math.floor(Math.random() * 2);
}
function buildCables(module) {
    for (let j = 0; j < 6; j++) {
        if (module < 3) {
            crc.fillStyle = "#444444";
            crc.strokeStyle = colors[Math.floor(Math.random() * 6)];
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
            crc.strokeStyle = colors[Math.floor(Math.random() * 6)];
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
