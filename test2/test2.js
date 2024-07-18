"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const crc = canvas.getContext("2d");
canvas.addEventListener("click", checkClick);
const targets = [];
function createTarget() {
    let target = {
        x: Math.random() * (canvas.width - 150),
        y: Math.random() * (canvas.height - 150),
        color: `hsl(${Math.random()},100%,50%)`,
        size: Math.random() * 100 + 20,
        xSpeed: Math.random() * 5 + 1,
        ySpeed: Math.random() * 5 + 1,
        clicked: false,
    };
    targets.push(target);
}
function createTargets(_amount) {
    for (let i = 0; i < _amount; i++) {
        createTarget();
    }
}
function checkClick(_event) {
    for (let i = 0; i < targets.length; i++) {
        if (targets[i].x - targets[i].size <= _event.offsetX || _event.offsetX <= targets[i].x + targets[i].size) {
            if (targets[i].y - targets[i].size <= _event.offsetY || _event.offsetY <= targets[i].y + targets[i].size) {
                if (targets[i].clicked == false) {
                    crc.clearRect(targets[i].x - targets[i].size, targets[i].y - targets[i].size, targets[i].x + targets[i].size, targets[i].y + targets[i].size);
                    targets[i].clicked = true;
                }
            }
        }
    }
}
function updateTarget() {
    for (let i = 0; i < targets.length; i++) {
        let _target = targets[i];
        _target.x += _target.xSpeed;
        _target.y += _target.ySpeed;
        if (_target.x < 0 || _target.x > canvas.width) {
            _target.xSpeed = -(_target.xSpeed);
        }
        if (_target.x < 0 || _target.x > canvas.height) {
            _target.ySpeed = -(_target.ySpeed);
        }
    }
}
function drawTargets() {
    for (let i = 0; i < targets.length; i++) {
        let currentTarget = targets[i];
        crc.beginPath();
        crc.ellipse(currentTarget.x, currentTarget.y, currentTarget.size, currentTarget.size, 0, Math.PI * 180, Math.PI * 90, true);
        crc.fillStyle = currentTarget.color;
        crc.fill();
        crc.closePath;
    }
}
createTarget;
function animationFrame() {
}
