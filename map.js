/*
  4- map [ ForLoop ]
     - Ordered key-value pairs of data
     - Element access via key
     - Iterable = you can use the for-of loop
     - Keys are unique, values are not
     - Keys can anything
     - Pure date storage optimized for data access
*/
const map = new Map();
const germany = {name: 'Germany', population: 82};
map.set(germany, 0.89)
map.set('age', 12);
map.get('age');
map.delete('age');
for(const el of map) {
  console.log(el);
}
