class Stack {
    constructor(){
        this.top = -1;
        this.items = {};
    }

    get peek(){
        return this.items[this.top]
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value;
    }

    pop(){
        this.top -= 1;
    }
}

module.exports = Stack;
