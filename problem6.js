

function bmwandaudi(inventory) {
  let bmw_and_audi = [];
  if (Array.isArray(inventory)) {
    
    for (let car = 0; car < inventory.length; car++) {

      if (inventory[car].car_make === "BMW" || inventory[car].car_make === "Audi") {
        bmw_and_audi.push(JSON.stringify(inventory[car]));
      }

    }
  }
    return bmw_and_audi;
  
}

module.exports = bmwandaudi;
