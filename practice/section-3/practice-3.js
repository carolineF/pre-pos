function create_updated_collection(collection_a, object_b) {
  var collection_c = countSameElements(collection_a);
  var collection_b = object_b.value;
  var result = collection_c;
  for (var i = 0; i < collection_b.length; i++) {
    var index = findIndex(collection_c, collection_b[i]);
    if (index !== -1) {
      result[index].count = result[index].count - Math.floor(collection_c[index].count / 3);
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
function countSameElements(collection) {
  var result = [];
  var items = processCollectionData(collection);
  for (var element in items) {
    result.push({key: element, count: items[element]});
  }
  return result;
}
function processCollectionData(collection) {
  var items = {};
  for (var i = 0; i < collection.length; i++) {
    items[collection[i]] = items[collection[i]] ? items[collection[i]] + 1 : 1;
  }
  return items;
}
