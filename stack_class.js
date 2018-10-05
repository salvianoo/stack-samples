class Stack {
  constructor(data = []) {
    this.data = data
  }

  push(item) {
    this.data.push(item)
  }

  pop() {
    return this.data.pop()
  }
}

const stack = new Stack();
stack.push(10)
stack.push(30)
stack.push(20)

console.log( stack.data )
