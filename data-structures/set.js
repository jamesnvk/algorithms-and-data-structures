// a set stores unique values

function Set(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.count = 0
}

Set.prototype.add = function(value) {
  if(this.storage[value]){
    return 'Value already exists in set'
  }
}