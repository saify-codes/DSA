class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = null
    }

    empty(){
        return this.head === null && this.tail === null
    }

    insertHead(data){
        const node = new Node(data)

        if (this.empty()) {
            this.head = node
            this.tail = node
        }else{

            node.next = this.head
            this.head = node

        }

        this.length++
    }
    insertTail(data){
        const node = new Node(data)

        if (this.empty()) {
            this.head = node
            this.tail = node
        }else{

            this.tail.next = node
            this.tail = node

        }

        this.length++
    }
    insertMiddle(data, index){
        if (index < 0 || index > this.length - 1) {
            throw Error('index out of bound')
        }

        if (index === 0) {
            this.insertHead(data)
            return
        }

        const node    = new Node(data)
        let current = this.head

        // logi 1
        for(let i = 1; i < index && current; i++){
            current = current.next
        }

        
        // logic 2
        // while (index > 0 && tmp) {
        //     tmp.next = tmp
        //     index--
        // }

        if (!current) {
            throw Error('index out of bound')
            
        }
        
        node.next = current.next
        current.next = node

        this.length++

    }
    deleteHead(){

        if (this.empty()) {
            return
        }

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        }else{
            
            this.head = this.head.next

        }

        this.length--

    }
    traverse(){
        let tmp = this.head

        while(tmp){
            console.log(tmp.data);
            tmp = tmp.next
        }
    }
}


const list = new LinkedList()

list.insertTail(1)
list.insertTail(2)
list.insertTail(3)

console.log(list.traverse());
