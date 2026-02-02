console.log('Task 3');
class StringBuilder {
  #value;
  constructor(initalValue) {
    this.#value = initalValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += String(str).trim();
  }
  padStart(str) {
    this.#value = String(str).trim() + this.#value;
  }
  padBoth(str) {
    this.#value = String(str).trim() + this.#value + String(str).trim();
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
// console.log(builder.value);
