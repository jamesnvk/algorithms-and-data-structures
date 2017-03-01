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