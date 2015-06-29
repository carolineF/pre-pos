function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  	var collection_c = countCollection(collection_a);
	var temp = object_b.value;
	var res = collection_c;
  	for(var i=0; i<temp.length; i++){
  		var index = findIndex(collection_c,temp[i]);
  		
  		if(index !== -1){
  			res[index].count = res[index].count- Math.floor(collection_c[index].count/3);
  		}
  	}
  	return res;
}

function findIndex(collection_a,data){
	for(var i=0; i<collection_a.length; i++){
		if(collection_a[i].key == data){
			return i;
		}
	}
	return -1;
}

function countCollection(collection){
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
