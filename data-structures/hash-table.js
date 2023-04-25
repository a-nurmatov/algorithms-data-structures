class HashTable {
  constructor(size = 53) {
    this.keyMap = Array(53);
  }

  set(key, value) {
    let index = this._hash(key, this.keyMap.length);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key, this.keyMap.length);
    const [resultKey, value] =
      this.keyMap[index]?.find(([existingKey, value]) => existingKey === key) ||
      [];
    return value;
  }

  keys() {
    let resultKeys = [];
    this.keyMap.forEach((entries) => {
      entries.forEach(([key, value]) => resultKeys.push(key));
    });
    return resultKeys;
  }

  values() {
    let resultValues = [];
    this.keyMap.forEach((entries) => {
      entries.forEach(([key, value]) => resultValues.push(value));
    });
    return resultValues;
  }

  entries() {
    let resultEntries = [];
    this.keyMap.forEach((entries) => {
      entries.forEach((entry) => resultEntries.push(entry));
    });
    return resultEntries;
  }

  _hash(key, arrayLen) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }
}

const colors = new HashTable();

colors.set("red", "#d1231");
colors.set("green", "#djf34");
console.log(colors.keyMap);
console.log(colors.get("red"));
console.log(colors.get("orange"));
console.log(colors.keys());
console.log(colors.values());
console.log(colors.entries());
