// EXAMPLE 1 - Rename an Object's Key in JavaScript

const obj = {oldKey: 'value'};

obj['newKey'] = obj['oldKey'];
delete obj['oldKey'];

console.log(obj); // 👉️ {newKey: 'value'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Rename an Object Key using Object.assign()

// const obj = {oldKey: 'value'};

// Object.assign(obj, {newKey: obj['oldKey']});

// delete obj['oldKey'];

// console.log(obj); // 👉️ { newKey: 'value' }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Rename an Object Key using Object.defineProperty()

// const obj = {oldKey: 'value'};

// Object.defineProperty(
//   obj,
//   'newKey',
//   Object.getOwnPropertyDescriptor(obj, 'oldKey'),
// );

// delete obj['oldKey'];

// console.log(obj); // 👉️ { newKey: 'value' }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Rename multiple keys in an Object in JavaScript

// function renameKeys(obj, newKeys) {
//   const entries = Object.keys(obj).map(key => {
//     const newKey = newKeys[key] || key;

//     return {[newKey]: obj[key]};
//   });

//   return Object.assign({}, ...entries);
// }

// const obj = {oldKey1: 'value1', oldKey2: 'value2', another: '1'};

// const newKeys = {oldKey1: 'newKey1', oldKey2: 'newKey2'};

// // 👇️ { newKey1: 'value1', newKey2: 'value2', another: '1' }
// console.log(renameKeys(obj, newKeys));
