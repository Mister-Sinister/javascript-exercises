const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR"
    }
    else {
        let repeatedString = "";
        while (num > 0) {
            repeatedString += string;
            num--;
        }
        return repeatedString    
    }
};

// Do not edit below this line
module.exports = repeatString;
