interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

let pair: KeyValuePair<string, number> = {key: 'hello', value: 5};

console.log(pair);