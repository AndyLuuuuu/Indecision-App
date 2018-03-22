// Challenge

const multiplier = {
    // numbers - array of numbers
    numbers: [1101, 2202, 3303],
    // multiplyBy - single number
    multiplyBy: 30,
    // multiply - return a new array where the numers have been multipled
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());