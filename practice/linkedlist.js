class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  empty() {
    return this.head === null && this.tail === null;
  }

  insertHead(data) {
    const node = new Node(data);

    if (this.empty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }
  insertTail(data) {
    const node = new Node(data);

    if (this.empty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }
  insertMiddle(data, index) {
    if (index < 0 || index > this.length - 1) {
      throw Error("index out of bound");
    }

    if (index === 0) {
      this.insertHead(data);
      return;
    }

    const node = new Node(data);
    let current = this.head;

    // logi 1
    for (let i = 1; i < index && current; i++) {
      current = current.next;
    }

    // logic 2
    // while (index > 0 && tmp) {
    //     tmp.next = tmp
    //     index--
    // }

    if (!current) {
      throw Error("index out of bound");
    }

    node.next = current.next;
    current.next = node;

    this.length++;
  }
  deleteHead() {
    // If the list is empty, return immediately
    if (this.empty()) {
      return;
    }

    // If there is only one node in the list
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      // Store reference to current head
      const tmp = this.head;
      // Move head to the next node
      this.head = this.head.next;
      // Clean up old head
      tmp.next = null;
    }

    // Decrement the length
    this.length--;
  }
  deleteTail() {
    // If the list is empty, return immediately
    if (this.empty()) {
      return;
    }

    // If there is only one node in the list
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {

      let current = this.head

      while(current.next != this.tail){
        current = current.next
      }

      current.next = null
      this.tail = current

    }

    // Decrement the length
    this.length--;
  }
  reverse(){

    let prev    = null
    let current = this.head
    let next    = null

    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.tail = this.head
    this.head = prev

  }
  traverse() {
    let tmp = this.head;

    while (tmp) {
      console.log(tmp.data);
      tmp = tmp.next;
    }
  }
}

const list = new LinkedList();

list.insertTail(1);
list.insertTail(2);
list.insertTail(3);

list.reverse()


console.log(list.head, list.tail);
