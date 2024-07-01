interface StudentData{
    name: string,
    address: string,
    matrikel: number,
    exmatriculated: boolean,
}

let student1: StudentData = {
    name: "Justus Louis Vincent",
    address: "Sussy Baka Street 69",
    matrikel: 69420,
    exmatriculated: true,
}

let student2: StudentData = {
    name: "Auch Justus Louis Vincent",
    address: "not Sussy Baka Street 69",
    matrikel: 69421,
    exmatriculated: false,
}

let students: StudentData[] = [student1, student2];

function studentInfo(student: StudentData): void{
    console.log(student.name + " lives at " + student.address + " and has matrikel number " + student.matrikel);
}
for(let i:number = 0; i < students.length; i++){
studentInfo(students[i]);
}