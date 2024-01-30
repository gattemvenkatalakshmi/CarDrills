

function sortedCarModel(inventory) {
      
      if (Array.isArray(inventory)) {
            for (let car = 0; car < inventory.length; car++) {
                  for (let car2 = car; car2 < inventory.length; car2++) {
                        if (inventory[car].car_model > inventory[car2].car_model) {
                              let temp = inventory[car];
                              inventory[car] = inventory[car2];
                              inventory[car2] = temp;
                        }


                  }
            }
      }
      return inventory;
}

module.exports = sortedCarModel;