function Stack(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.count = 0
}

// Time complexity: O(1)
Stack.prototype.push = function(value) {
  if(this.count < this.capacity) {
    this.storage[this.count++] = value
    return this.storage
  } else {
    return "Max capacity reached for stack"
  }
}

// Time complexity: O(1)
Stack.prototype.pop = function() {
  var value = this.storage[--this.count]
  delete this.storage[this.count]
  if(this.count < 0) this.count = 0;
  return value
}

// Time complexity: O(1)
Stack.prototype.peek = function() {
  return this.storage[this.count-1]
}

// Time complexity: O(1)
Stack.prototype.count = function() {
  return this.count
}

Stack.prototype.contains = function(value){
  for(let key in this.storage){
    if(this.storage[key] === value){
      return true;
    }
  }
  return false;
}