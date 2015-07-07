function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    var item = findSameItem(collection_b, collection_a[i]);
    if (item) {
      result.push(item);
    }
   }
  return result;
}
function findSameItem(collection, data) {
  if (collection.indexOf(data) !== -1) {
    return data;
  }
  return undefined;
}
