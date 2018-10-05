function Stack(_data = []) {
  return {

    push(item) {
      _data = _data.push(item)
    },

    pop() {
      return _data.pop()
    },

    data() {
      return _data
    }

  }
}

const stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log( stack.data() )
