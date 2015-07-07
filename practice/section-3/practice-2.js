function create_updated_collection(collection_a, object_b) {
  var collection_b = object_b.value;
  var result = collection_a;
  for (var i = 0; i < collection_b.length; i++) {
    var index = findIndex(collection_a, collection_b[i]);
    if (index !== -1) {
      result[index].count = result[index].count - Math.floor(collection_a[index].count / 3);
    }
  }
  return result;
}
function findIndex(collection_a, data) {
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i].key == data) {
      return i;
    }
  }
  return -1;
}
