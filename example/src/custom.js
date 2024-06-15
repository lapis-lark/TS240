var customArray1 = {
    1: "Jane",
    2: "30",
    3: "female",
};
var customArray2 = ["apple", 42, "banana"];
// the same interface can support both objects and arrays. . . curious
console.log(Array.isArray(customArray1)); // false
console.log(Array.isArray(customArray2)); // true
console.log(customArray2[2]);
function processCustomArray(arr) {
    if (Array.isArray(arr)) { // necessary since it could be an object as above?
        return arr.filter(function (element) { return typeof element === 'string'; })
            .map(function (element) { return element.toUpperCase(); });
    }
}
console.log(processCustomArray(customArray2));
