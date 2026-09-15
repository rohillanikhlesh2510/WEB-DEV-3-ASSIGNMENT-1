# Lab Assignment 1 – Smart Utility Toolkit

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-3c096c?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Author](https://img.shields.io/badge/Author-Anveshna-9d4edd?style=flat-square&logo=github&logoColor=white)](https://github.com/anveshna25)
[![Repository](https://img.shields.io/badge/GitHub-webdev3__assign-7b2cbf?style=flat-square&logo=github&logoColor=white)](https://github.com/anveshna25/webdev3_assign)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero-0d0221?style=flat-square)](#technology-stack)
[![License](https://img.shields.io/badge/License-ISC-e0aaff?style=flat-square&labelColor=10002b)](LICENSE)

A hands-on Node.js backend toolkit developed for **Web Dev III (Node.js & Express Backend) Lab Assignment 1**. This project demonstrates fundamental backend development concepts using **Node.js Core Modules exclusively** (`process`, `http`, `fs`, `crypto`, `path`), featuring command-line interaction, custom module export/import reusability, basic HTTP server routing, CRUD file operations, secure random generation, and execution flow analysis.

> [!NOTE]
> A detailed technical explanation document detailing the architecture, execution flow analysis (sync vs async), core module mechanics, and command verification is available at [`assets/EXPLANATION.md`](assets/EXPLANATION.md).

---

## 📐 Repository Structure

```
smart-utility-toolkit/
├── calculator.js               # CLI Calculator parsing process.argv inputs
├── app.js                      # Main entry point reusing custom modules (isEven & logger)
├── server.js                   # Native HTTP Web Server handling custom routes & 404s
├── fileManager.js              # File CRUD operations (fs) & sync vs async execution demo
├── dice.js                     # Crypto-random dice roll generator with history logging
├── test.txt                    # Sample text file for file system testing
├── package.json                # Project configuration & npm execution scripts
├── modules/
│   ├── isEven.js               # Custom parity module exporting isEven
│   └── logger.js               # Custom colorized ANSI logger with ISO timestamps
├── assets/
│   ├── Lab Assignment 1.pdf    # Original assignment prompt document
│   └── EXPLANATION.md          # Technical explanation & execution guide
└── README.md                   # Project documentation & quick-start guide
```

---

## ⚡ Core Features & Modules

### 1. CLI Calculator (`calculator.js`)
Calculates arithmetic operations directly from command-line arguments using `process.argv`.
- **Supported Operations**: `add`, `subtract`, `multiply`, `divide`, `modulo`, `power`

```bash
# Example Commands
node calculator.js add 10 5
node calculator.js divide 100 4
node calculator.js power 2 8
```

### 2. Custom Modules & Reusability (`app.js` & `modules/`)
Demonstrates importing and reusing custom modules (`isEven` & `logger`) via `require()`.

```bash
# Example Commands
node app.js 4       # Output: [SUCCESS] Number 4 is EVEN
node app.js 7       # Output: [SUCCESS] Number 7 is ODD
node app.js Hello   # Output: [INFO] Input message: "Hello"
```

### 3. Native HTTP Server (`server.js`)
Built using Node.js core `http` module listening on port `3000` (or configured `PORT`).

| Route | Response Description | HTTP Status |
| :--- | :--- | :--- |
| `GET /` | Welcome Home Page | `200 OK` |
| `GET /about` | About Anveshna & Toolkit Overview | `200 OK` |
| `GET /contact` | Developer Contact Details | `200 OK` |
| `GET /*` | Custom 404 Error Page | `404 Not Found` |

```bash
# Start Server
node server.js
# Or via npm script:
npm run server
```

### 4. File Manager & Execution Flow (`fileManager.js`)
Performs file CRUD operations using Node.js `fs` (`writeFile`, `readFile`, `appendFile`, `unlink`). Includes an execution flow demonstration comparing synchronous vs. asynchronous event loop behavior.

```bash
# Interactive Commands
node fileManager.js create test.txt "Initial Content"
node fileManager.js read test.txt
node fileManager.js update test.txt "\nAppended Line"
node fileManager.js delete test.txt

# Run Execution Flow & Console Analysis Demo
node fileManager.js demo
# Or via npm script:
npm run file:demo
```

### 5. Cryptographic Dice Generator (`dice.js`)
Generates cryptographically secure dice rolls (numbers 1–6) using `crypto.randomInt()`. Automatically persists history logs with timestamps to `dice_history.txt`.

```bash
# Roll single dice & default simulation
node dice.js

# Roll dice N times in a loop
node dice.js 5
```

---

## 📊 Rubric Compliance

| Rubric Criteria | Allocated Marks | Implementation Summary |
| :--- | :---: | :--- |
| **Functionality** | 1.5 Marks | Implemented CLI Calculator, Custom `isEven` module, Native HTTP server routing, `fs` CRUD File Manager, and `crypto` Random Dice Generator. |
| **Code Structure & Modules** | 0.5 Marks | Clean CommonJS modular architecture using `module.exports` and `require()` matching exact specified directory layout. |
| **Clean Code & Output** | 0.5 Marks | Colorized ANSI console logging, ISO timestamps, graceful error handling, and complete technical documentation. |
| **Total** | **2.5 Marks** | **Fully Satisfied** |

---


