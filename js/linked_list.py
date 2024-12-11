class Node:
    def __init__(self, val):
        self.data = val
        self.next = None
        
class LinkedList:
    
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def empty(self):
        return self.head == self.tail == None
    
    def insertHead(self, val):
        
        node = Node(val)
        
        if self.empty():
            self.head = node
            self.tail = node
        else:
            
            node.next = self.head
            self.head = node
            
        self.length += 1
    
    def insertTail(self, val):
        
        node = Node(val)
        
        if self.empty():
            self.head = node
            self.tail = node
        else:
            
            self.tail.next = node
            self.tail      = node
            
        self.length += 1
    
    def insertMiddle(self, val, index):
        
        if index < 0:
            raise IndexError()
        
        if index == 0:
            self.insertHead(val)
            return
        
        node = Node(val)
        tmp  = self.head
        i = 0
        
        while i < index and tmp:
            tmp = tmp.next
            i +=1
        
        if not tmp:
            raise IndexError()
            
        
        node.next = tmp.next
        tmp.next  = node
        
    def reverse(self):
        
        if self.empty():
            return
        
        prev    = None
        current = self.head
        next    = None
        
        while current:
            
            next         = current.next
            current.next = prev
            prev         = current
            current      = next
            
        
        self.tail = self.head
        self.head = prev
    
    def traverse(self):
        
        tmp = self.head
        while tmp:
            print(tmp.data, end=" ")
            tmp = tmp.next
           
    
l = LinkedList()

l.insertTail(1)
l.insertTail(2)
l.insertTail(3)

l.reverse()


l.traverse()