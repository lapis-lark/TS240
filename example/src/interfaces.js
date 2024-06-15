var myDog = {
    name: "Rex",
    makeSound: function () { return "Generic animal sound"; },
    fetch: function () { return "Rex fetches a stick."; },
};
var example = [[1, 'hi'], [4, 'howdy'], [6, 'osuuu'], [11, 'ya hou!']];
example.forEach(function (_a) {
    var key = _a[0], value = _a[1];
    console.log(typeof key === 'number');
});
