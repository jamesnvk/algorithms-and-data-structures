function Stack(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.count = 0
}

Stack.prototype.push = function(value) {
  if(this.count < this.capacity) {
    this.storage[this.count++] = value
    return this.storage
  } else {
    return "Max capacity reached for stack"
  }
}
// Time complexity:

Stack.prototype.pop = function() {
  var value = this.storage[--this.count]
  delete this.storage[this.count]
  if(this.count < 0) this.count = 0;
  return value
}
// Time complexity:

Stack.prototype.peek = function() {
  return this.storage[this.count-1]
}
// Time complexity:

Stack.prototype.count = function() {
  return this.count
}