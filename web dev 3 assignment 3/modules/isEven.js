// Custom module to check if a number is even

// function to check if a number is even
function isEven(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) {
        return false;
    }
    return num % 2 === 0;
}

// export the isEven function for reusability
module.exports = {
    isEven
};
