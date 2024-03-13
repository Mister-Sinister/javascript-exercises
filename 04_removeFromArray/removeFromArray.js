const removeFromArray = function(array, ...args) {
    newArray = [];
    for (let toRemove of args) {
        for (let i in array) {
            // if (array[i] === toRemove) {
            //     array.splice(i,1);

            // }
            if (array[i] !== toRemove) {
                newArray.push(array[i]);
            }
        }
    }
    return newArray
    // return array;
};


removeFromArray([1, 2, 2, 3], 2);
// Do not edit below this line
module.exports = removeFromArray;
