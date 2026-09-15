// Logger module providing colored console output and timestamps using ANSI escape codes

const ANSI_COLORS = {
    RESET: '\x1b[0m',
    RED: '\x1b[31m',
    GREEN: '\x1b[32m',
    YELLOW: '\x1b[33m',
    CYAN: '\x1b[36m'
};

// get current formatted timestamp
function getTimestamp() {
    return new Date().toISOString();
}

// log info message in cyan
function logInfo(message) {
    console.log(`[${getTimestamp()}] ${ANSI_COLORS.CYAN}[INFO]${ANSI_COLORS.RESET} ${message}`);
}

// log success message in green
function logSuccess(message) {
    console.log(`[${getTimestamp()}] ${ANSI_COLORS.GREEN}[SUCCESS]${ANSI_COLORS.RESET} ${message}`);
}

// log warning message in yellow
function logWarning(message) {
    console.log(`[${getTimestamp()}] ${ANSI_COLORS.YELLOW}[WARNING]${ANSI_COLORS.RESET} ${message}`);
}

// log error message in red
function logError(message) {
    console.error(`[${getTimestamp()}] ${ANSI_COLORS.RED}[ERROR]${ANSI_COLORS.RESET} ${message}`);
}

module.exports = {
    logInfo,
    logSuccess,
    logWarning,
    logError,
    ANSI_COLORS
};
