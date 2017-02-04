function Queue(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.head = 0
  this.tail = 0
}

// Time complexity: O(1)
Queue.prototype.enqueue = function(value) {
  if(this.count() < this.capacity){
    this.storage[this.tail++] = value
    return this.count()
  }
  return 'Max capacity reached. Remove an item first'
}

// Time complexity: O(1)
Queue.prototype.dequeue = function() {
  var element = this.storage[this.head]
  delete this.storage[this.head]
  if(this.head < this.tail) this.head++
  return element
}

// Time complexity: O(1)
Queue.prototype.peek = function() {
  return this.storage[this.head]
}

// Time complexity: O(1)
Queue.prototype.count = function() {
  return this.tail - this.head
}
