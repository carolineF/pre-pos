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
    var count = 1;
    var item = collection[i];
    if (item.length > 1) {
      count = parseInt(item.split('-')[1]);
      item = item.split('-')[0];
    }
    items[item] = items[item] ? items[item] + 1 : count;
  }
  return items;
}
