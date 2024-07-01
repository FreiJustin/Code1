let slayText = [
    "AMOGUS",
    "SUS",
    "BAKA",
    "IMPASTA",
    "SUSSY"
]
let slayColor = [
    "red",
    "htoPink",
    "cyan",
    "blue",
    "yellow",
    "orange",
    "green",
    "purple"
]

let slayfont = [
    "comicsans",
    "helvetica",
    "futura"
]


/*let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = 'World'

let newSpan: HTMLSpanElement= document.createElement("span");
newSpan.textContent = "Hello"
document.body.appendChild(newSpan);

console.log(newSpan)*/

let i: number = 0
do {
    i++;
    console.log(i);
    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent = slayText[Math.floor(Math.random() * 5)];
    document.body.appendChild(newSpan);

    newSpan.style.color = slayColor[Math.floor(Math.random() * 8)];
    newSpan.style.fontFamily = slayfont[Math.floor(Math.random() * 3)];
    newSpan.style.fontSize = Math.random() * 50 + "pt";
    newSpan.style.position = "absolute";

    newSpan.style.top = Math.random() * 90 + "%";
    newSpan.style.left = Math.random() * 85 + "%";
    newSpan.addEventListener("click", handleClick);
} while (i < 200)


function handleClick(_event: Event): void {
    let SpanTarget: HTMLElement = <HTMLElement>_event.target;
    SpanTarget.textContent = "ඞ";
}