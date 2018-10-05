function Stack(_data = []) {

  function push(item) {
    _data.push(item)
  }

  function pop() {
    return _data.pop()
  }

  function data() {
    return _data
  }

  return {
    push: push,
    pop: pop,
    data: data
  }
}

const stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log( stack.data() )
