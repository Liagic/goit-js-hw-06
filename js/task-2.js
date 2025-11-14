class Storage {
  constructor(items) {
    self.items = items;
  }
  getItems() {
    return self.items;
  }
  addItem(newItem) {
    self.items.push(newItem);
  }
  removeItem(itemToRemove) {
    self.items = self.items.filter(
      item => itemToRemove.toLowerCase() !== item.toLowerCase()
    );
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
