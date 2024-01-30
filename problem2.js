
function lastId(inventory) {
     let data=[]
    if (Array.isArray(inventory)) {
       data = inventory[inventory.length - 1];
    }
     return data;
}
module.exports = lastId;
