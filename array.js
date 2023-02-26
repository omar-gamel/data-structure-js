/*
  1- Array [ ForLoop ]
     - Insertion order is Kept
     - Element access via index
     - iteration = you user the for-of loop
     - Size (length) adjusts dynamically
     - Duplicate values are allowed
     - Deletion and finding elements can require 'extra work'
*/

const arr = [1,3,6,2];
arr.push('Jon');
for(const i of arr) {
  console.log(arr[i]);
}
