// Link: https://learnersbucket.com/tutorials/data-structures/circular-linked-list-implementation-in-javascript/

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
    } else {
      const current = this.getElementAt(this.length - 1);
      current.next = newNode;
    }
    newNode.next = this.head;
    this.length++;
  }

  toArray() {
    const elements = [];
    let counter = 0;
    let curNode = this.head;
    while (counter < this.length) {
      elements.push(curNode);
      curNode = curNode.next;
      counter++;
    }
    return elements;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  setElementAt(value, index) {
    if (index >= 0 && index <= this.length) {
      let current = this.head;
      if (index === 0) {
        if (!this.head) {
          const node = { value, next: null };
          this.head = node;
          node.next = this.head;
        } else {
          const node = { value, next: this.head.next };
          const current = this.getElementAt(this.length);
          this.head = node;
          current.next = this.head;
        }
      } else {
        const node = { value, next: null };
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      length++;
      return true;
    }
    return false;
  }
}

const Linked = new CircularLinkedList();

Linked.append('11');
Linked.append('22');
Linked.append('33');
console.log(Linked.toArray());

Linked.setElementAt('44', 0);
console.log(Linked.toArray());
