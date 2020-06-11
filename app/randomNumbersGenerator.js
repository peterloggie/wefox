module.exports = class RandomNumbersGenerator {

    constructor(numbersToGenerate=500, min=0, max=10000) {
        this.min = min
        this.max = max
        this.numbers = this.generateNumbers(numbersToGenerate);
    }

    generateNumbers = function(numbersToGenerate) {
        let numbers = []
        for (let i=0; i < numbersToGenerate; i++) {
            numbers.push(this.generateRandomNumber());
        }
        return numbers
    }

    generateRandomNumber = function() {
        return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }

    getLowestNumber = function(n=1) {
        if (n > this.numbers.length) {
            throw new RangeError()
        }

        var sortedArray = this.numbers.sort(function(a, b){return a-b})
        return sortedArray[n-1]
    }

};
