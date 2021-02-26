var input = [10, 4, 8, 11, 3, 29, 23, 31, 6, 12, 10];
function qsort (array) {
  if (array.length < 2) {
    return array;
  }
  else {
    var oporny = array[0];
    var less = [];
    var more = [];
    for (var i = 1; i < array.length; i++) {
      if (array[i] <= oporny) {
        less.push(array[i]);
      }
      else {
        more.push(array[i]);
      }
    }
    return Array.prototype.concat(qsort(less), oporny, qsort(more));
  }
}
console.log(qsort(input));