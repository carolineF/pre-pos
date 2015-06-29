function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var res = new Array();
  //方法一：时间复杂度为O(N^2)
 /* for(var i=0; i<collection_a.length; i++){
  	for(var x=0; x<collection_b.length; x++){
  		if(collection_b[x].indexOf(collection_a[i]) !== -1){
  			res.push(collection_a[i]);
  		}
  	}
  }*/

  //方法二：将数组转换为字符串，时间复杂度为O(N)
  var s = collection_b.toString();
  for(var i=0; i<collection_a.length; i++){
  	if(s.indexOf(collection_a[i]) !== -1){
  		res.push(collection_a[i]);
	 }
  }

  return res;
}
