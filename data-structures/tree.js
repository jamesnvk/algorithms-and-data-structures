function Tree(value) {
  this.value = value
  this.children = []
}

Tree.prototype.addChild = function(value) {
  var child = new Tree(value)
  this.children.push(child)
  return child
}

Tree.prototype.contains = function(value) {
  if(this.value === value) return true;
  for(let i = 0; i < this.children.length; i++){
    if(this.children[i].contains(value)) return true;
  }
  return false
}

Tree.prototype.traverseDepthFirst = function(fn) {
  this.children.forEach(function(child){
    child.traverseDepthFirst(fn)
  })
  fn(this)
}