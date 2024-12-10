import ctypes

class Queue:
    def __init__(self, capacity=10):
        self.front  = -1
        self.rear   = -1
        self.size   = capacity
        
        # Create a fixed-size array of `c_int` elements.
        self.array  = (ctypes.c_int * capacity)()

    def empty(self):
        return self.front == -1

    def full(self):
        return (self.rear + 1) % self.size == self.front

    def reset(self):
        self.front = -1
        self.rear  = -1

    def enqueue(self, val):
        if self.full():
            raise Exception("overflow")

        if self.front == -1:
            self.front = 0
        
        self.rear = (self.rear + 1) % self.size
        self.array[self.rear] = val

    def dequeue(self):
        if self.empty():
            raise Exception("underflow")

        item = self.array[self.front]
        
        if self.front == self.rear:
            self.reset()
        else:
            self.front = (self.front + 1) % self.size
        return item

    def peek(self):
        if self.empty():
            return None
        return self.array[self.front]

# Example usage:
queue = Queue(5)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue()  # remove 1
queue.dequeue()  # remove 2
queue.dequeue()  # remove 3

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)


# Print elements by converting ctypes array to a Python list for readability
print(list(queue.array))  
