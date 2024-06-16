var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    {
        id: 1,
        name: "Sample Product",
        price: 49.99,
        description: "A sample product for demonstration",
    },
];
function updateProduct(productId, updatedValues) {
    // Your implementation here:
    // Find product to update by productId
    // If found, apply partial update with using object spreading
    // Else log out "Product not found"
    var product = products.filter(function (p) { return p.id === productId; })[0];
    if (product) {
        product = __assign(__assign({}, product), updatedValues);
        console.log(product);
    }
    else {
        console.log('product not found');
    }
}
updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
});
