function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var items = {};
  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    items[item] = items[item] ? items[item] + 1 : 1;
  }
  for (var Element in items) {
    result.push({key: Element, count: items[Element]});
  }
  return result;
}
