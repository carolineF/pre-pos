function count_same_elements(collection) {
  //在这里写入代码
  var res = [];
  var Items = {};
 
  for(var i=0; i<collection.length; i++){
    var Item = collection[i];
    var count = 1;
    if(Item.length>1){
    	count = parseInt(Item.split(/:|-|\[/)[1]);
    	Item = Item.split(/:|-|\[/)[0];
    	///[:-]/
    }
    Items[Item] = Items[Item] ? Items[Item]+count : count;
  }
  console.log(Items);
  for(var Element in Items){
    res.push({name: Element, summary:Items[Element]});
  }
  
  return res;
}
