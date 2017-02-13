function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head
}

LinkedList.prototype.forEach = function(fn) {
  var node = this.head
  while(node) {
    fn(node.value)
    node = node.next
  }
}

LinkedList.prototype.print = function() {
  var result = []
  this.forEach(function(value){
    result.push(value)
  })
  return result.join(', ')
}

LinkedList.prototype.insertAfter = function(node, value) {
  var oldNext = node.next
  var newNext = new Node(value)
  node.next = newNext
  newNext.next = oldNext

  if (this.tail === node) this.tail = newNext;
  return newNext
}

LinkedList.prototype.removeAfter = function(node) {
  var removed = node.next
  if (!node.next) console.log('Nothing to remove');
  var newNext = removed.next
  node.next = newNext
  removed.next = null
  if (removed === this.tail) this.tail = node;
  return removed
}

LinkedList.prototype.insertHead = function(value) {
  var oldHead = this.head
  this.head = new Node(value)
  this.head.next = oldHead
  return this.head
}
