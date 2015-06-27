function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var res = new Array();
  var collection_b = object_b.value;
  for(var i=0; i<collection_a.length; i++){
  	if(-1 !== collection_b.indexOf(collection_a[i].key)){
  		res.push(collection_a[i].key);
  	}
  }

  return res;
}
