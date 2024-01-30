

function olerCar(inventory) {
    let old_cars = [];
    if (Array.isArray(inventory)) {
        for (let car = 0; car < inventory.length; car++) {

            if (inventory[car].car_year <= 2000) {
                old_cars.push(inventory[car]);
            }
        }
    }
     return old_cars
}


module.exports = olerCar;