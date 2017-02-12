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