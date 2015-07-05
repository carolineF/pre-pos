function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var collection_b = object_b.value;
  for (var i = 0; i < collection_a.length; i++) {
    if (findIndex(collection_b,collection_a[i].key) !== -1) {
      result.push(collection_a[i].key);
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
