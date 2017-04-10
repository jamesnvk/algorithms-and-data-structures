// a set stores unique values

function Set(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.count = 0
}

Set.prototype.add = function(value) {
  if(this.storage[value]){
    return 'Value already exists in set'
  } else if(this.count < this.capacity){
    this.storage[value] = true
    this.count++
    return value + ' added, capacity is ' + this.count + '/' + this.capacity
  }

  return 'Max capacity reached.'
}

Set.prototype.remove = function(value) {
  if(!this.storage[value]){
    return 'Value does not exist'
  } else {
    delete this.storage[value]
    this.count--
    return value + ' removed, capacity is ' + this.count + '/' + this.capacity
  }
}

Set.prototype.space = function() {
  return 'Capacity is ' + this.count + '/' + this.capacity
}
