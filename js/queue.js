class Queue {
  constructor(capacity = 10) {
    this.front = -1;
    this.rear = -1;
    this.size = capacity;
    this.array = Array(capacity);
  }

  empty() {
    return this.front == -1 && this.rear == -1;
  }

  full() {
    return this.front == 0 && this.rear == this.size - 1;
  }

  reset() {
    this.front = -1;
    this.rear = -1;
  }

  enqueue(val) {
    if (this.full()) throw Error("overflow");

    if (this.front == -1) {
      this.front++;
    }

    this.rear++;
    this.array[this.rear] = val;
  }

  dequeue() {
    if (this.empty()) throw new Error("underflow");
    const item = this.array[this.front];
    this.front === this.rear ? this.reset() : this.front++;
    return item;
  }

  peek() {
    return this.array[this.front];
  }
}

const queue = new Queue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();

queue.enqueue(33);
queue.enqueue(44);
queue.enqueue(55);

console.log(queue.array);