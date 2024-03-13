const reverseString = function(string) {
    stringArray = string.split("");
    stringArrayReversed = stringArray.reverse();
    reversedString = stringArrayReversed.join("").toString();
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
