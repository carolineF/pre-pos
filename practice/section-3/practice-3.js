function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = countCollection(collection_a);
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

function countCollection(collection) {
  var result = [];
  var items = {};
  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    items[item] = items[item] ? items[item] + 1 : 1;
  }
  for (var element in items) {
    result.push({key: element, count: items[element]});
  }
  return result;
}
