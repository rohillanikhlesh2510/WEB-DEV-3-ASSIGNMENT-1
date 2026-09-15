// Random Dice Generator using crypto module
const crypto = require("crypto");
const fs = require("fs");

const arg = process.argv[2];
const customCount = arg ? parseInt(arg, 10) : null;

if (customCount && !isNaN(customCount) && customCount > 0) {
    console.log(`Simulating ${customCount} dice rolls:`);
    for (let i = 1; i <= customCount; i++) {
        const diceValue = crypto.randomInt(1, 7);
        console.log(`Roll #${i}: Dice Rolled: ${diceValue}`);
        fs.appendFile("dice_history.txt", `Roll #${i}: ${diceValue} [${new Date().toISOString()}]\n`, (err) => {
            if (err) {
                console.log("Error writing to history file:", err);
            }
        });
    }
} else {
    // Single dice roll
    crypto.randomInt(1, 7, (err, value) => {
        if (err) {
            console.log("Error generating dice value:", err);
            return;
        }
        console.log(`Dice Rolled: ${value}`);
    });

    console.log("\nSimulating multiple dice rolls:");

    // Multiple dice rolls using a loop (5 times)
    for (let i = 1; i <= 5; i++) {
        const diceValue = crypto.randomInt(1, 7);
        console.log(`Roll #${i}: Dice Rolled: ${diceValue}`);

        // Bonus Challenge: Store dice roll history in text file
        fs.appendFile("dice_history.txt", `Roll #${i}: ${diceValue} [${new Date().toISOString()}]\n`, (err) => {
            if (err) {
                console.log("Error writing to history file:", err);
            }
        });
    }
}
