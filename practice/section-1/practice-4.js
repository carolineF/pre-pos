function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var res = [];
  var collection_b = object_b.value;
  for(var i=0; i<collection_a.length; i++){
  	if(collection_b.indexOf(collection_a[i].key) !== -1){
  		res.push(collection_a[i].key);
  	}
  }

  return res;
}
