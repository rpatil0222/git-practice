const fortune1 = "What is meant for you will come to you today.";
const fortune2 = "An unexpected surprise will greet you at dusk.";
const fortune3 = "You will meet your closest ally today.";
const fortune4 = "Look beneath the finch's house for guidance.";
const fortune5 = "Winter will not come this year.";

let randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {selectedFortune = fortune1;}
else if (randomNumber === 2) {selectedFortune = fortune2;}
else if (randomNumber === 3) {selectedFortune = fortune3;}
else if (randomNumber === 4) {selectedFortune = fortune4;}
else if (randomNumber === 5) {selectedFortune = fortune5;}

console.log(selectedFortune);