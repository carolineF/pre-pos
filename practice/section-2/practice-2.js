function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var items = {};

  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    var count = 1;
    if (item.length > 1) {
      count = parseInt(item.split('-')[1]);
      item = item.split('-')[0];
    }
    items[item] = items[item] ? items[item] + 1 : count;
  }
  //console.log(Items);
  for (var element in items) {
    result.push({key: element, count: items[element]});
  }

  return result;
}
