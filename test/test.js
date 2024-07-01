"use strict";
let newzahl = 1;
let zahl = prompt("geben zahl ein", "hier");
for (let b = 0; b++; b < 9999) {
    let test = b;
    let check = test.toString();
    if (check == zahl) {
        newzahl = b;
        b = 10000;
        console.log(newzahl);
    }
}
