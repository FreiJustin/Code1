"use strict";
let student1 = {
    name: "Justus Louis Vincent",
    address: "Sussy Baka Street 69",
    matrikel: 69420,
    exmatriculated: true,
};
let student2 = {
    name: "Auch Justus Louis Vincent",
    address: "not Sussy Baka Street 69",
    matrikel: 69421,
    exmatriculated: false,
};
let students = [student1, student2];
function studentInfo(student) {
    console.log(student.name + " lives at " + student.address + " and has matrikel number " + student.matrikel);
}
for (let i = 0; i < students.length; i++) {
    studentInfo(students[i]);
}
