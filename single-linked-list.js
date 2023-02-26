/*
  why would you want a Linked List ?

  - The main reason was memory management: You didn't have to specify the size in advance.
  - JavaScript has dynamic arrays and memory isn't really the primary issue in JavaScript apps.
  - Linked List can be useful if you do a lot of insertions at the beginning of list - linked lists are faster than arrays at this.
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value, next: null };

    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;

    if (!this.head) this.head = newNode;
  }

  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if(existingNode) {
      const newNode = {value, next: existingNode.next}
      existingNode.next = newNode
    }

    return null;
  }

  find(value) {
    if (!this.head) return;

    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value)
        return curNode;

      curNode = curNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) return;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append('hello there');
linkedList.append('Jon');
linkedList.append('Jon');
linkedList.append(true);
linkedList.append(18.51);
linkedList.prepend('First value!');
linkedList.prepend('First value!');
console.log(linkedList.toArray());

linkedList.delete('First value!');
linkedList.delete('Jon');
linkedList.delete(18.51);
console.log(linkedList.toArray());

console.log(linkedList.find('Max'));
console.log(linkedList.find(1));

linkedList.insertAfter('Hi', 1)
console.log(linkedList.toArray());
