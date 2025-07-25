/* eslint-disable no-unused-vars */
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  };
sale(itemID) {
    if (this.inventory[itemID] && this.inventory[itemID].stock > 0) {
      this.inventory[itemID].stock -= 1;
      return `1 ${this.inventory[itemID].name} - Thank you and come again!`;
    } else {
      return 'Item not available';
    }
  }
  stockTotal() {
    const total = Object.values(this.inventory).reduce((acc, item) => acc + item.stock, 0);
    return total > 0 ? `${total} item(s)` : 'Out of Stock'; 
}
}