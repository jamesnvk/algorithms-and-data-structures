/*
Implement a function that will reverse a string recursively.
reverse('abcd')
=> 'dcba'
*/

function reverse(str) { // abcd
  if(str.length === 0) return '';

  return str.slice(-1) + reverse(str.slice(0, -1))
}




