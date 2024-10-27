class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prv = this.head;
      while (prv.next) {
        prv = prv.next;
      }
      prv.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is Empty');
    } else {
      let curNode = this.head;
      let results = '';
      while (curNode) {
        results += `${curNode.value} `;
        curNode = curNode.next;
      }
      console.log(results);
    }
  }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print();

list.append(10);
list.append(20);
list.append(30);

list.print();
