const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect,
      assert = chai.assert;

const RandomNumbersGenerator = require("../app/randomNumbersGenerator.js");

describe("Random Number generator", function() {

    describe("Configuration", function() {
        it("should generate 500 random numbers by default", function() {
            var generator = new RandomNumbersGenerator();
            expect(generator.numbers.length).to.equal(500);
        })

        it("can be configured to generate n random numbers", function() {
            var generator = new RandomNumbersGenerator(5);
            expect(generator.numbers.length).to.equal(5);
        })
    })

    describe("Returned numbers", function() {
        it("should return the smallest number by default", function() {
            var generator = new RandomNumbersGenerator();

            sinon.stub(generator, "numbers").value(
                [22, 24, 26, 28, 10, 12, 14, 16, 18, 20]
            )

            expect(generator.getLowestNumber()).to.equal(10)
        })

        it("should return the nth smallest number", function() {
            var generator = new RandomNumbersGenerator();

            sinon.stub(generator, "numbers").value(
                [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
            )

            expect(generator.getLowestNumber(1)).to.equal(2)
            expect(generator.getLowestNumber(5)).to.equal(10)
        })

        it("should throw an error if n > length of set of generated numbers", function() {
            var generator = new RandomNumbersGenerator();

            sinon.stub(generator, "numbers").value(
                []
            )

            assert.throw(
                function() {
                    generator.getLowestNumber(1)
                },
                RangeError
            );

        })
    })
})