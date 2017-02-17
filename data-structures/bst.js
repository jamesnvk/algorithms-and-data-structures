function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if(value <= this.value){
    if(this.left) this.left.insert(value);
    else this.left = new BinarySearchTree(value);
  } 
  if (value > this.value){
    if(this.right) this.right.insert(value);
    else this.right = new BinarySearchTree(value);
  }
  return this
}

BinarySearchTree.prototype.contains = function(value) {
  if(this.value === value) return true;
  if(value < this.value) return !!this.left && this.left.contains(value)
  if(value > this.value) return !!this.right && this.right.contains(value)
    return false;
}