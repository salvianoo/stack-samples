function Stack(data = []) {

  this.data = function() {
    return data
  }

  this.push = function(item) {
    data.push(item)
  }

  this.pop = function() {
    return data.pop()
  }
}

const stack = new Stack()
stack.push(10)
stack.push(30)
stack.push(60)

console.log( stack.data() )
