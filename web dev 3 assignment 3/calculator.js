// CLI-Based Calculator using process.argv

const opArg = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (!opArg || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power> <num1> <num2>");
    console.log("Aliases supported: +, -, *, x, /, %, ^");
    process.exit(1);
}

const operation = opArg.toLowerCase();
let result;

if (operation === "add" || operation === "+") {
    result = num1 + num2;
} else if (operation === "subtract" || operation === "sub" || operation === "-") {
    result = num1 - num2;
} else if (operation === "multiply" || operation === "mul" || operation === "*" || operation === "x") {
    result = num1 * num2;
} else if (operation === "divide" || operation === "div" || operation === "/") {
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed!");
        process.exit(1);
    }
    result = num1 / num2;
} else if (operation === "modulo" || operation === "mod" || operation === "%") {
    if (num2 === 0) {
        console.log("Error: Modulo by zero is not allowed!");
        process.exit(1);
    }
    result = num1 % num2;
} else if (operation === "power" || operation === "pow" || operation === "^") {
    result = num1 ** num2;
} else {
    console.log("Error: Invalid operation! Supported: add (+), subtract (-), multiply (*), divide (/), modulo (%), power (^)");
    process.exit(1);
}

console.log(`Result: ${result}`);
