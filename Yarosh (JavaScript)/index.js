const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}


// Task #1.1
function checkNumber(num) {
    const number = Number(num);
    if (isNaN(number)) return new Error("Please enter a valid number");
    if (number > 7) return "Hello";
    return "The entered number is less than 7";
}


// Task #1.2
function checkName(str) {
    if (typeof str !== "string") return new Error("Input is not a string");
    if (str === "") return new Error("Empty string");
    if (str.toUpperCase() === "JOHN") return "Hello, John";
    return "There is no such name";
}


// Task #1.3
function getMultiplesOfThree (arr) {
    if (!Array.isArray(arr)) return new Error("Input is not an array");
    const res = arr.filter(item => item % 3 === 0);
    return res.length > 0 ? res : "No multiples of 3 found";
}


async function runProgram() {
    const input = await prompt("Enter any value: ");
    if (input.includes(',') || input.includes(' ')) {
        const arr = input.split(/[ ,]+/).map(Number);
        console.log(getMultiplesOfThree(arr));
    } else if (!isNaN(Number(input)) && input.trim() !== "") {
        console.log(checkNumber(Number(input)));
    } else {
        console.log(checkName(input));
    }
    rl.close();
    return "Program completed successfully";
}

runProgram().then((result) => {
    console.log(result);
});


// Task #2
// No, this bracket sequence [((())()(())]] is not correct.
// Solutions to the bug:
// 1. Change [( to [[ at the beginning: [[(())()(())]]
// 2. Change ]] to )] at the end: [((())()(()))]

