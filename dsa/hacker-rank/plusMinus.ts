'use strict';

// Set up input reading from standard input
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

// Read input from standard input
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

// Parse input and call main function
process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

/**
 * Reads the next line of input.
 * 
 * @returns The next line of input as a string.
 */
function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/**
 * Prints the ratio of positive, negative, and zero elements in the array.
 * 
 * @param arr An array of integers.
 */
function plusMinus(arr: number[]): void {
    // 1. prepare 3 variables: positive, negative, zero
    // 2. iterate through the array
    // for each element, check if it's positive, negative, or zero 
    // then increment the corresponding variable
    // 3. calculate the ratio of each variable to the length of the array
    // round results to 6 decimal places
    // 4. print the ratio to the console

    let positive: number = 0;
    let negative: number = 0;
    let zero: number = 0;

    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

/**
 * Main function that reads input and calls the plusMinus function.
 */
/**
 * Main function that reads input and calls the plusMinus function.
 */
function main() {
    // const n: number = parseInt(readLine().trim(), 10);

    /**
     * An array of integers.
     */
    const arr: number[] = readLine()
        // Remove trailing spaces, split string into array of strings, convert strings to integers
        .replace(/\s+$/g, '')
        .split(' ')
        .map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

// // Check how long this script takes to run
// console.time('timer');

// // print hello world to console
// console.log('Hello, World!');

// console.timeEnd('timer');
// // Check how long this script takes to run

