// Main Application Entry Point (app.js)
// Demonstrates importing and reusing custom modules (isEven & logger)

const { isEven } = require('./modules/isEven');
const { logInfo, logSuccess, logWarning, logError } = require('./modules/logger');

// Take input from command line argument
const input = process.argv[2];

if (!input) {
    // If no argument is provided, run the integrated demo suite cleanly
    logInfo('Running integrated demonstration for custom modules:');
    
    // Demonstrate isEven with multiple sample numbers
    [4, 7, 12, 15].forEach((val) => {
        const parity = isEven(val) ? 'EVEN' : 'ODD';
        logSuccess(`Number ${val} is ${parity}`);
    });
    
    // Demonstrate logger with sample messages
    logInfo('Custom message logging active: "Smart Utility Toolkit initialized"');
    logWarning('Tip: Pass an argument directly (e.g. `node app.js 8` or `node app.js Hello`)');
} else {
    const num = Number(input);

    if (Number.isNaN(num)) {
        // If input is text, log message using logger module
        logInfo(`Input message: "${input}"`);
    } else {
        // If input is a number, test parity using isEven module
        const result = isEven(num) ? 'EVEN' : 'ODD';
        logSuccess(`Number ${num} is ${result}`);
    }
}
