/*
  2- set [ Not repeated element - ForLoop ]
     - Insertion order is not stored/ memorized
     - Element access and extraction via method
     - Iterable = you use the for-of loop
     - Size (length) adjusts dynamically
     - Duplicate values are not allowed
     - Deletion and finding elements is trivial and fast
*/
const set = new Set();
set.add('pizza');
set.add('pizza'); // not added
set.has('');
set.delete('');
for(const el of ids) {
  console.log(el);
}
