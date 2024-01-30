
const inventory = require("../data");
const carWithId = require("../problem1");

let data = (carWithId(inventory));
console.log(`Car 33 is a ${data.car_year} ${data.car_model} ${data.car_make}`);
