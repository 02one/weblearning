function cal() {
	// body... 
	var array=["a","x","b","d","m","a", "k","m","p","j","a"];
	var count = {};
	var location = {};
	var maxChar = {};
	var maxCount;
	var maxCharArray = {};
	for(var i = 0; i < array.length; i++){
		var temp = array[i];
		if (count[temp]) {
			// statement
			count[temp] ++;  
			location[temp] += "," + i; 
		}else{
			count[temp] = 1;
			location[temp] = i;
		}
	}
	// 各个字母次数大小排列
	var sortCharCnt = Object.keys(count).sort(function(a,b){
		return count[a] < count[b];
	});
	var i = 1;
	var maxCharNum = count[sortCharCnt[0]];
	maxCharArray = sortCharCnt[0]
	while ((count[sortCharCnt[i]] == maxCharNum) && (sortCharCnt.length > i)) {
		maxCharArray += "," + sortCharCnt[i];
		i++;
	}
	
	var maxCharArrayAfter = maxCharArray.split(",");
    maxCount = count[sortCharCnt[0]];
	document.getElementById("mostItem").value = maxCharArray;
	document.getElementById("num").value = maxCount;
	for(var i = 0; i < maxCharArrayAfter.length; i++){
		document.getElementById("location").value += location[maxCharArrayAfter[i]] + ";";
	}	
	
}