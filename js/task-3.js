class StringBuilder {
  constructor(initialValue) {
    self.value = initialValue;
  }
  getValue() {
    return self.value;
  }
  padStart(inputValue) {
    self.value = inputValue + self.value;
  }
  padEnd(inputValue) {
    self.value += inputValue;
  }
  padBoth(inputValue) {
    self.value = inputValue + self.value + inputValue;
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
