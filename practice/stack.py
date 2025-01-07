import ctypes


class Stack:
    
    def __init__(self, capacity = 5):
        self.array = (ctypes.c_int8 * capacity)()
        self.size = capacity
        self.pointer = -1
        
    def full(self):
        return self.pointer == self.size - 1
    
    def empty(self):
        return self.pointer == -1
    
    def push(self, data):
        
        if self.full():
            raise Exception('overflow')
        
        self.pointer += 1
        self.array[self.pointer] = data
    
    def pop(self):
        
        if self.empty():
            raise Exception('underflow')
        
        element = self.array[self.pointer]
        self.pointer -= 1
        
        return element
    
    def peek(self):
        
        if self.empty():
            return None
        
        return self.array[self.pointer]
        
    
        
stack = Stack()

stack.push(1)
stack.pop()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

stack.pop()
stack.pop()
stack.pop()
stack.pop()

