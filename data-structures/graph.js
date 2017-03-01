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
   if(this.nodes[value1] && this.nodes[value2]) {
      var arr1 = this.nodes[value1]
      var arr2 = this.nodes[value2]
      for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === value2){
          for(let j = 0; j < arr2.length; j++){
            if(arr2[j] === value1) return true;
          }
        }
      }
   }
   return false;
}
