function count_same_elements(collection) {
  var result = [];
  var items =  processCollectionData(collection);
  for (var element in items) {
    result.push({name: element, summary: items[element]});
  }
  return result;
}
function processCollectionData(collection) {
  var items = {};
  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    var count = 1;
    if (item.length > 1) {
      count = parseInt(item.split(/:|-|\[/)[1]);
       item = item.split(/:|-|\[/)[0];
    }
    items[item] = items[item] ? items[item] + count : count;
  }
  return items;
}
