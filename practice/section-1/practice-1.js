function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var res = [];
  //方法一：用双重循环遍历数组，时间复杂度为O(N^2)
  /*for(var i=0; i<collection_a.length; i++){
  	for(var x=0; x<collection_b.length; x++){
  		if(collection_a[i] == collection_b[x]){
  			res.push(collection_a[i]);
  		}
  	}
  }*/

  //方法二：用查找下标的方式，时间复杂度为O(N)
  for(var i=0; i<collection_a.length; i++){
  	if(collection_b.indexOf(collection_a[i]) !== -1){
  		res.push(collection_a[i]);
  	}
  }

  return res;
}
