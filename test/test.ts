
let newzahl:number = 1;
let zahl:String = prompt("geben zahl ein", "hier")!;
for(let b:number = 0; b++; b < 9999)
    {
        let test:number = b;
        let check = test.toString();
        if (check == zahl){
            newzahl = b;
            b = 10000;
            console.log(newzahl);

        }
    }
