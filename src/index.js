module.exports = function reverse (n) {
  let arr = n.toString().split('');
  if (arr[0] == "0"|| arr[0] == "-") {
    arr.shift();
  }
  let numberReversed=arr.reverse().join('');
  return numberReversed;
}
