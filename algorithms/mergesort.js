function mergeSort(arr) {
  if(arr.length <= 1) return arr;

  //divide and conquer
  var mid = arr.length / 2
  var left = arr.slice(0, mid)
  var right = arr.slice(mid)

  var leftSorted = mergeSort(left)
  var rightSorted = mergeSort(right)

  return merge(leftSorted, rightSorted)
}
