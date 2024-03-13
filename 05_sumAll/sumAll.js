const sumAll = function(num1, num2) {
    if (isPositiveNumber(num1) && isPositiveNumber(num2)) {

        sumArray = checkLarger(num1, num2);
        smaller_num = sumArray[1];
        larger_num = sumArray[0];
        let sum = smaller_num;
        for(let i = smaller_num; i < larger_num; i++) {
            sum += (i+1);
        }
        return sum;
    }
    else {
        return "ERROR"
    }
};

function isPositiveNumber (num) {
    if (Number.isInteger(num) && !(num < 0)) {
        return true
    }
}

function checkLarger (num1, num2) {
    numberArray = [];
    if (num1 > num2) {
        numberArray.push(num1);
        numberArray.push(num2);
    }
    else {
        numberArray.push(num2);
        numberArray.push(num1);
    }
    return numberArray;

}

// Do not edit below this line
module.exports = sumAll;
