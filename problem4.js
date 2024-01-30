

function car_years(inventory) {
    let years = [];
    if (Array.isArray(inventory)) {
        
        for (let car = 0; car < inventory.length; car++) {

            years.push(inventory[car].car_year);

        }
    }
    return years;

}



module.exports = car_years;