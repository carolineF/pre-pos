function count_same_elements(collection) {
  //在这里写入代码
  var res = [];
  var Items = {};
  for(var i=0; i<collection.length; i++){
    var Item = collection[i];
    Items[Item] = Items[Item] ? Items[Item]+1 : 1;
  }
  for(var Element in Items){
    res.push({key: Element, count:Items[Element]});
  }
  return res;
}
