"use strict";
function filterByType(array, type) {
    return array.filter(ele => typeof ele === type);
}
console.log(filterByType(["hello", "world", 42, true], "string"));
