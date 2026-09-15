// File Manager utility using Node.js core fs module
// Demonstrates CRUD operations and Synchronous vs Asynchronous execution flow

const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const targetFile = process.argv[3] || "test.txt";
const fileContent = process.argv[4];

// Helper functions for CRUD operations
function createFile(filename, content, callback) {
    fs.writeFile(filename, content, "utf-8", (err) => {
        if (err) {
            console.error("Error in writing the data :", err.message);
            if (callback) callback(err);
            return;
        }
        console.log(`[SUCCESS] File successfully created/written at: ${filename}`);
        if (callback) callback(null);
    });
}

function readFile(filename, callback) {
    fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
            console.error("Error in reading the file :", err.message);
            if (callback) callback(err);
            return;
        }
        console.log(`[SUCCESS] Content of '${filename}':\n${data}`);
        if (callback) callback(null, data);
    });
}

function updateFile(filename, content, callback) {
    fs.appendFile(filename, content, "utf-8", (err) => {
        if (err) {
            console.error("Error in updating the data :", err.message);
            if (callback) callback(err);
            return;
        }
        console.log(`[SUCCESS] Successfully appended data to file: ${filename}`);
        if (callback) callback(null);
    });
}

function deleteFile(filename, callback) {
    fs.unlink(filename, (err) => {
        if (err) {
            console.error("Error Deleting :", err.message);
            if (callback) callback(err);
            return;
        }
        console.log(`[SUCCESS] File successfully deleted: ${filename}`);
        if (callback) callback(null);
    });
}

// Execution Flow & Console Analysis Demo (Synchronous vs Asynchronous)
function runExecutionFlowDemo() {
    console.log("[STEP 1] Synchronous console log BEFORE async operations");
    console.log(`[INFO] [Async Operation Started] Creating file at: ${targetFile}`);

    createFile(targetFile, "Hello World from Nikhlesh Toolkit !!\n", (err) => {
        if (err) return;
        console.log("[STEP 3] Inside createFile async callback");
        console.log(`[INFO] [Async Operation Started] Appending to file: ${targetFile}`);

        updateFile(targetFile, "Here we are demonstrating async append operation !!\n", (err) => {
            if (err) return;
            console.log("[STEP 4] Inside updateFile async callback");

            readFile(targetFile, (err) => {
                if (err) return;
                console.log("[STEP 5] Inside readFile async callback - Demo completed successfully!");
            });
        });
    });

    console.log("[STEP 2] Synchronous console log AFTER triggering async operations (Observe event loop behavior!)");
}

// Router for CLI commands
if (command === "create") {
    const data = fileContent !== undefined ? fileContent : "Hello World !!";
    createFile(targetFile, data);
} else if (command === "read") {
    readFile(targetFile);
} else if (command === "update") {
    const data = fileContent !== undefined ? fileContent : "\nHere we are implementing the update feature !!";
    updateFile(targetFile, data);
} else if (command === "delete") {
    deleteFile(targetFile);
} else if (command === "demo") {
    runExecutionFlowDemo();
} else {
    // Default mode: Run standard CRUD operations sequence when no specific command is given
    console.log("=== Running File Manager CRUD Operations ===");
    const defaultFile = "test.txt";
    const defaultData = "Hello World !!";

    // 1. INSERT / WRITE
    createFile(defaultFile, defaultData, (err) => {
        if (err) return;

        // 2. READ
        readFile(defaultFile, (err) => {
            if (err) return;

            // 3. UPDATE
            const appendData = "\nHere we are implementing the update feature !!";
            updateFile(defaultFile, appendData, (err) => {
                if (err) return;

                // 4. Sample Delete test if sample.txt exists
                if (fs.existsSync("sample.txt")) {
                    deleteFile("sample.txt");
                } else {
                    // Create and delete a temporary sample file to demonstrate unlink cleanly
                    fs.writeFileSync("sample.txt", "temporary sample content");
                    deleteFile("sample.txt");
                }
            });
        });
    });
}
