// Time complexity: O(n^2)
function bubbleSort(list) {
  for(let i = 0; i < list.length; i++){
    for(let j = 0; j < list.length - 1; j++){
      if(list[j] > list[j+1]){
        var element = list[j]
        list[j] = list[j+1]
        list[j+1] = element
      }
    }
  }
  return list;
}
