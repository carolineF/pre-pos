function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  	var temp = object_b.value;
	var res = collection_a;
  	for(var i=0; i<temp.length; i++){
  		var index = findIndex(collection_a,temp[i]);
  		console.log(index)
  		if(index !== -1){
  			res[index].count = res[index].count- 1;
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