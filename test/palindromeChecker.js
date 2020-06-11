const chai = require("chai");
const sinon = require("sinon");

const expect = chai.expect,
      assert = chai.assert;

const palindromeChecker = require("../app/palindromeChecker.js");

describe("Palindrome checker", function() {

    it("should return false if the sentence is not a palindrome", function() {
        stringToCheck = "not a palindrome";
        expect(palindromeChecker(stringToCheck)).to.equal(false);
    })

    it("should account for spaces", function() {
        stringToCheck = "race car";
        expect(palindromeChecker(stringToCheck)).to.equal(true);
    })

    it("should account for different case letters", function() {
        stringToCheck = "RACEcar"
        expect(palindromeChecker(stringToCheck)).to.equal(true);
    })

    it("should account for punctutation", function() {
        stringToCheck = "A man, a plan, a canal, Panama!"
        expect(palindromeChecker(stringToCheck)).to.equal(true);
    })
})
