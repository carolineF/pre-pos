function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    if(findIndex(collection_b, collection_a[i]) !== -1){
      result.push(collection_a[i]);
    }
   }
  return result;
}
function findIndex(collection_a, data) {
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i]== data) {
      return i;
    }
  }
  return -1;
}
