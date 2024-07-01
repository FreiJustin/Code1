"use strict";
let canvas = document.getElementsByTagName("canvas")[0];
let crc1 = canvas.getContext("2d");
let tree1 = {
    height: 200,
    type: "needle",
    leafColor: "green",
    width: 50,
    position: 300,
};
let tree2 = {
    height: 300,
    type: "leaf",
    leafColor: "orange",
    width: 40,
    position: 400,
};
let trees = [tree1, tree2];
for (let i = 0; i < trees.length; i++) {
    if (trees[i].type == "needle") {
        crc1.fillStyle = "brown";
        crc1.fillRect(trees[i].position, 600, -trees[i].width, -(trees[i].height / 10));
        crc1.beginPath();
        crc1.fillStyle = trees[i].leafColor;
        crc1.moveTo(trees[i].position - trees[i].width * 0.5, 600 - trees[i].height);
        crc1.lineTo(trees[i].position + (trees[i].width * 1.5) - trees[i].width * 0.5, 600 - (trees[i].height / 10));
        crc1.lineTo(trees[i].position - (trees[i].width * 1.5) - trees[i].width * 0.5, 600 - (trees[i].height / 10));
        crc1.closePath();
        crc1.fill();
    }
    //süße laubbäumchen :)
    else {
        crc1.fillStyle = "brown";
        crc1.fillRect(trees[i].position, 600, -trees[i].width, -(trees[i].height * 0.5));
        crc1.beginPath();
        crc1.fillStyle = trees[i].leafColor;
        crc1.ellipse(trees[i].position - (trees[i].width * 0.5), 600 - (trees[i].height * 0.5), (trees[i].width * 2), trees[i].height * 0.25, 0, Math.PI * 180, Math.PI * 90, true);
        crc1.closePath();
        crc1.fill();
    }
}
