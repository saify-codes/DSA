class Stack{
    constructor(capacity = 10){
        this.pointer = -1
        this.size    = capacity
        this.array   = Array(capacity)
    }

    empty(){
        return this.pointer == -1
    }

    full(){
        return this.pointer == this.size - 1
    }

    push(val){
        if(this.full()) throw Error("overflow")

        this.array[++this.pointer] = val
    }

    pop(){
        if(this.empty()) throw Error("underflow")

       return this.array[this.pointer--]
    }

    peek(){
        return this.array[this.pointer]
    }
}


const stack = new Stack(5)


stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)



console.log(stack.pop());
