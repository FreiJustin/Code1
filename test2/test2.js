"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const crc = canvas.getContext("2d");
canvas.addEventListener("click", placeObject);
let shapes = [];
function placeObject(_event) {
    console.log(_event);
    createObject(_event.offsetX, _event.offsetY);
}
function drawObject(_shape) {
    if (_shape.shape == 1) {
        crc.beginPath();
        crc.ellipse(_shape.x, _shape.y, _shape.size, _shape.size, Math.PI, Math.PI * 180, Math.PI * 90);
        crc.fillStyle = _shape.color;
        crc.fill();
        crc.closePath();
    }
    else {
        crc.fillStyle = _shape.color;
        crc.fillRect(_shape.x, _shape.y, _shape.size, _shape.size);
    }
}
function createObject(x, y) {
    if (Math.random() < 0.5) {
        let shape = {
            x: x,
            y: y,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 50 + 10,
            shape: 1
        };
        shapes.push(shape);
    }
    else {
        let shape = {
            x: x,
            y: y,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 50 + 10,
            shape: 2
        };
        shapes.push(shape);
    }
}
function drawObjects() {
    shapes.forEach(_shape => { drawObject(_shape); });
}
function moveObjects() {
    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].y < canvas.height - shapes[i].size) {
            shapes[i].y += 3;
        }
    }
}
function animationFrame() {
    crc.clearRect(0, 0, canvas.width, canvas.height);
    moveObjects();
    drawObjects();
    requestAnimationFrame(animationFrame);
}
requestAnimationFrame(animationFrame);
