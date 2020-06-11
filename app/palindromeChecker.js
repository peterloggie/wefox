module.exports = function palindromeChecker(originalString) {
    var withoutPunctuation = originalString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var withoutSpaces = withoutPunctuation.replace(/\s+/g, "");
    var cleanString = withoutSpaces.toLowerCase();
    var reverseString = cleanString.split("").reverse().join("");
    return cleanString == reverseString
}