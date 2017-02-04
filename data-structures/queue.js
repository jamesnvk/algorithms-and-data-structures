function Queue(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.head = 0
  this.tail = 0
}

// Time complexity:
Queue.prototype.enqueue = function(value) {
  if(this.count() < this.capacity){
    this.storage[this.tail++] = value
    return this.count()
  }
  return 'Max capacity reached. Remove an item first'
}

// Time complexity:
Queue.prototype.dequeue = function() {
  var element = this.storage[this.head]
  delete this.storage[this.head]
  if(this.head < this.tail) this.head++
  return element
}

// Time complexity:
Queue.prototype.peek = function() {
  return this.storage[this.head]
}

// Time complexity:
Queue.prototype.count = function() {
  return this.tail - this.head
}
