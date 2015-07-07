function count_same_elements(collection) {
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
