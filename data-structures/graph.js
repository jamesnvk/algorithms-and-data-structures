// graph = {
//   1: [2, 4],
//   2: [1, 3, 4],
//   3: [2],
//   4: [1, 2]
// }

function Graph() {
  this.nodes = {}
}

Graph.prototype.addNode = function(value) {
  if(value === undefined) return "Node must contain a value";
  if(!this.nodes[value]) this.nodes[value] = [];
}

Graph.prototype.addEdge = function(value1, value2) {
  if(this.nodes[value1] && this.nodes[value2]) {
    this.nodes[value1].push(value2)
    this.nodes[value2].push(value1)
  } else {
    return "Invalid node value"
  }
}

Graph.prototype.contains = function(value) {
  return this.nodes[value] ? true : false
}

Graph.prototype.hasEdge = function(value1, value2) {
  return this.nodes[value1].indexOf(value2) > -1;
}

Graph.prototype.traverseDepthFirst = function(value, fn, visited, distance) {
  visited = visisted || {}
  distance = distance || 0
  fn(value)
  visited[value] = true;

  this.nodes[value].forEach(function(neighbor){
    if(visited[neighbor]) return;
    this.traverseDepthFirst(neighbor, fn, visited, distance+1)
  }, this)
}

