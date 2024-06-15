function isCar(vehicle) {
    return 'doors' in vehicle;
}
// Usage
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    type: "car",
    doors: 4,
};
if (isCar(myCar)) {
    console.log(myCar.doors);
}
