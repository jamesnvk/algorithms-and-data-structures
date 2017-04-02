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

function merge(left, right) {
  var result = [], lPointer = 0, rPointer = 0;

  while(result.length < (left.length + right.length)){
     // if all elements in left have been added, then add remaining right elements
     if(lPointer === left.length) result = result.concat(right.slice(rPointer));
     // if all elements in right have been added, then add remaining left elements
     else if(rPointer === right.length) result = result.concat(left.slice(lPointer));
     // compare elements in subarrays and add lower of the two to result
     else if (left[lPointer] <= right[rPointer]) result.push(left[lPointer++]);
     else result.push(right[rPointer++]);
  }

  return result
}
