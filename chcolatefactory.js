function moveEmptyPacketsToEnd(arr) {
    let nonZero = [];
    let zeroCount = 0;

    // Loop through the array and count 0's, add non-zero elements to nonZero array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            nonZero.push(arr[i]);
        }
    }

    // Append 0's at the end of the nonZero array
    for (let i = 0; i < zeroCount; i++) {
        nonZero.push(0);
    }

    return nonZero;
}

// Example usage:
let chocolates = [4, 5, 0, 1, 9, 0, 5, 0];
console.log(moveEmptyPacketsToEnd(chocolates));  // Output: [4, 5, 1, 9, 5, 0, 0, 0]
