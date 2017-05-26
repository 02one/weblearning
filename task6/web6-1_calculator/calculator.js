// 全局变量
var inputs = document.getElementsByTagName("button");
var firstNumber = null;
var secondNumber = null;
var result = 0;
// 功能键标志位
var operateSecondNumber = false;
var secondNumberOperatedFirsttime = false;
var signArray = new Array(null,null,null,null,null);
var storageData = 0;//显示的值
var realStorageData = 0;//真实算数值
var sign = null;
var realSign = null;
// 显示值转化为数字值
function shownum2Mathnum(shownum){
	var temp = shownum;
	if (temp[temp.length - 1] == "-" ) {
		temp = temp.substring(0, temp.length - 1);
		temp = Math.abs(temp);
		temp = "-" + temp;
	}else{
		temp = Math.abs(temp);
	}
	return temp;
}
// 数字值转化为显示值
function mathnum2Shownum(mathnum){
	if (mathnum < 0) {
		mathnum = Math.abs(mathnum);
		mathnum = mathnum + "-"
	}else {
		mathnum = Math.abs(mathnum);
	}
	return mathnum;
}
//存储函数
function storage(){
	storageData = document.getElementById("show-window").value;
	realStorageData = shownum2Mathnum(document.getElementById("show-window").value);
}
// 取存
function gainData(){	
	document.getElementById("show-window").value = storageData;
	if (firstNumber ==null) {
		firstNumber = realStorageData;
	}else if (secondNumber == null) {
		secondNumber = realStorageData;
	}
}
// 累存
function accumulation(){
	var temp = shownum2Mathnum(document.getElementById("show-window").value);
	realStorageData = parseFloat( parseFloat(temp) + parseFloat(realStorageData) ).toFixed(8);
	storageData = mathnum2Shownum(realStorageData);
}

// 积存
function flock(){
	var temp = shownum2Mathnum(document.getElementById("show-window").value);
	realStorageData = parseFloat( parseFloat(temp) * parseFloat(realStorageData) ).toFixed(8);
	storageData = mathnum2Shownum(realStorageData);
}

// 清存
function saveClear(){
	storageData = 0;
	realStorageData = 0;
}

// 清屏函数
function clearWindow(){
	document.getElementById("show-window").value = "0";
	firstNumber = null;
	secondNumber = null;
	result = 0;
	operateSecondNumber = false;
	secondNumberOperatedFirsttime = false;
	sign = null;
	realSign = null;
}
// 退格函数
function backSpace(){
	var temp = document.getElementById("show-window").value;
	if (temp.length == 1) {
		document.getElementById("show-window").value = "0";
	}else{
		temp = temp.substring(0,temp.length - 1);
		document.getElementById("show-window").value = temp;
	}	
}
// 小数点
function dotClick(){
	var temp = document.getElementById("show-window").value; 
	var dotMark = false;
	for(var i = 0; i < temp.length; i++){
		if (temp[i] == ".") {
			dotMark = true;
		}
	}
	if (!dotMark) {
		temp += "."; 
		document.getElementById("show-window").value = temp;
	}
	
}
// 符号变换
function signChange() {
	var temp;
	var digital = shownum2Mathnum(document.getElementById("show-window").value);
    if (digital < 0) {
		if (secondNumber == digital) {
		secondNumber = Math.abs(digital);
		}else if (firstNumber == digital) {
			firstNumber = Math.abs(digital);
		}
		temp = mathnum2Shownum(Math.abs(digital));
	}else {
		if (secondNumber == digital) {
			digital = "-" + digital;
			secondNumber = digital;
		}else if (firstNumber == digital) {
			digital = "-" + digital;
			firstNumber = digital;
		}
		temp = mathnum2Shownum(digital);
	}
	document.getElementById("show-window").value =  temp;		

}
// "="功能
function amount(){
	var temp;
	var zero = false;
	if ( (firstNumber != null) && (secondNumber != null) ) {
		switch (realSign) {
				case "+":
					result = parseFloat( parseFloat(firstNumber) + parseFloat(secondNumber) ).toFixed(8);
					break;
				case "-":
					result = parseFloat( parseFloat(firstNumber) - parseFloat(secondNumber) ).toFixed(8);
					break;
				case "*":
					result = parseFloat( parseFloat(firstNumber) * parseFloat(secondNumber) ).toFixed(8);
					break;
				case "/":
					if (secondNumber == 0) {
						zero = true;
						break;
					}
					result = parseFloat( parseFloat(firstNumber) / parseFloat(secondNumber) ).toFixed(8);
					break;
				default:
					// statements_def
					break;
			}
			if (zero) {
				document.getElementById("show-window").value = "NaN";
				firstNumber = null;
				secondNumber = null;
				zero = false;
			}else{
				temp = mathnum2Shownum(result);
				document.getElementById("show-window").value = temp;
			    firstNumber = result;
			    secondNumber = null;
			    operateSecondNumber = true;
			    secondNumberOperatedFirsttime = false;
			}

			
		
	}
}
// 功能键触发函数
function functionKey(number){
		if (secondNumberOperatedFirsttime) {
			document.getElementById("show-window").value="";
			document.getElementById("show-window").value += number;
			secondNumber = shownum2Mathnum(document.getElementById("show-window").value);
			realSign = sign;
			secondNumberOperatedFirsttime = false;
		}else{
			document.getElementById("show-window").value += number;
			secondNumber = shownum2Mathnum(document.getElementById("show-window").value);
			realSign = sign;
		}

}
// 数字键的触发函数

function  num0Click() {
	if(document.getElementById("show-window").value == '0')
	{
	}else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(0);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 0;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 0;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}
		}
	}
	
}
function  num1Click() {
	if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 1;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(1);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 1;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;	
			}else{
				temp += 1;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}			
		}
	}
}
function  num2Click() {
	if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 2;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(2);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 2;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 2;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}			
		}
	}
	
}
function  num3Click() {
	if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 3;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(3);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 3;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 3;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}			
		}
	}
}
function  num4Click() {
	if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 4;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(4);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 4;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 4;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}			
		}
	}
}
function  num5Click() {
	if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 5;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(5);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 5;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 5;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}			
		}
	}
}
function  num6Click() {
	if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 6;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(6);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 6;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 6;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}		
		}
	}
}
function  num7Click() {
  if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 7;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(7);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 7;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 7;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}		
		}
	}
}
function  num8Click() {
	if(document.getElementById("show-window").value == '0')
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 8;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(8);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 8;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 8;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}			
		}
	}
}
function  num9Click() {
	if(document.getElementById("show-window").value == "0")
	{
		document.getElementById("show-window").value = "";
		document.getElementById("show-window").value += 9;
		firstNumber = document.getElementById("show-window").value;
	}
	else{
		// 判断是否是操作第二位数
		if (operateSecondNumber) {			
			functionKey(9);
		}else{
			var temp = document.getElementById("show-window").value;
			var signMark = false;
			for(var i = 0; i < temp.length; i++){
				if (temp[i]=="-") {
					temp = temp.substring(0, i);
					temp += temp.substring(i);
					signMark = true;
				}
			}
			if (signMark) {
				temp += 9;
				temp = temp + "-";
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
				signMark = false;
				
			}else{
				temp += 9;
				document.getElementById("show-window").value = temp;
				firstNumber = shownum2Mathnum(temp);
			}			
		}
	}
}
// 加减乘除功能函数
function  plusClick() {
	var zero = false;
	if (firstNumber != null) {
		operateSecondNumber = true;
		secondNumberOperatedFirsttime = true;
		sign = "+";
		if (secondNumber != null) {
			switch (realSign) {
				case "+":
					result = parseFloat( parseFloat(firstNumber) + parseFloat(secondNumber) ).toFixed(8);
					break;
				case "-":
					result = parseFloat( parseFloat(firstNumber) - parseFloat(secondNumber) ).toFixed(8);
					break;
				case "*":
					result = parseFloat( parseFloat(firstNumber) * parseFloat(secondNumber) ).toFixed(8);
					break;
				case "/":
					if (secondNumber == 0) {
						zero = true;
						break;
					}
					result = parseFloat( parseFloat(firstNumber) / parseFloat(secondNumber) ).toFixed(8);
					break;
				default:
					// statements_def
					break;
			}
			if (zero) {
				document.getElementById("show-window").value = "NaN";
				firstNumber = null;
				secondNumber = null;
				zero = false;
			}else {
				document.getElementById("show-window").value = mathnum2Shownum(result);
			    secondNumber = null;
			    firstNumber = shownum2Mathnum(document.getElementById("show-window").value);
			}
			
		}
	}
	
}
function  minusClick() {
	var zero = false;

	if (firstNumber !=null) {
		functionClickMark = true;
		operateSecondNumber = true;
		secondNumberOperatedFirsttime = true;
		sign = "-";
		if (secondNumber != null) {
			
			switch (realSign) {
				case "+":
					result = parseFloat( parseFloat(firstNumber) + parseFloat(secondNumber) ).toFixed(8);
					break;
				case "-":
					result = parseFloat( parseFloat(firstNumber) - parseFloat(secondNumber) ).toFixed(8);
					break;
				case "*":
					result = parseFloat( parseFloat(firstNumber) * parseFloat(secondNumber) ).toFixed(8);
					break;
				case "/":
					if (secondNumber == 0) {
						zero = true;
						break;
					}
					result = parseFloat( parseFloat(firstNumber) / parseFloat(secondNumber) ).toFixed(8);
					break;
				default:
					// statements_def
					break;
			}
			if (zero) {
				document.getElementById("show-window").value = "NaN";
				firstNumber = null;
				secondNumber = null;
				zero = false;
			}else {
				document.getElementById("show-window").value = mathnum2Shownum(result);
			    secondNumber = null;
			    firstNumber = shownum2Mathnum(document.getElementById("show-window").value);
			}
		}
		}
}
function  multiplyClick() {
	var zero = false;

	if (firstNumber !=null) {
		functionClickMark = true;
		operateSecondNumber = true;
		secondNumberOperatedFirsttime = true;
		sign = "*";
		if (secondNumber != null) {
			
			switch (realSign) {
				case "+":
					result = parseFloat( parseFloat(firstNumber) + parseFloat(secondNumber) ).toFixed(8);
					break;
				case "-":
					result = parseFloat( parseFloat(firstNumber) - parseFloat(secondNumber) ).toFixed(8);
					break;
				case "*":
					result = parseFloat( parseFloat(firstNumber) * parseFloat(secondNumber) ).toFixed(8);
					break;
				case "/":
					if (secondNumber == 0) {
						zero = true;
						break;
					}
					result = parseFloat( parseFloat(firstNumber) / parseFloat(secondNumber) ).toFixed(8);
					break;
				default:
					// statements_def
					break;
			}
			if (zero) {
				document.getElementById("show-window").value = "NaN";
				firstNumber = null;
				secondNumber = null;
				zero = false;
			}else {
				document.getElementById("show-window").value = mathnum2Shownum(result);
			    secondNumber = null;
			    firstNumber = shownum2Mathnum(document.getElementById("show-window").value);
			}
		}
		
	}
}
function  divisionClick() {
	var zero = false;

	if (firstNumber !=null) {
		functionClickMark = true;
		operateSecondNumber = true;
		secondNumberOperatedFirsttime = true;
		sign = "/";
		if (secondNumber != null) {
			switch (realSign) {
				case "+":
					result = parseFloat( parseFloat(firstNumber) + parseFloat(secondNumber) ).toFixed(8);
					break;
				case "-":
					result = parseFloat( parseFloat(firstNumber) - parseFloat(secondNumber) ).toFixed(8);
					break;
				case "*":
					result = parseFloat( parseFloat(firstNumber) * parseFloat(secondNumber) ).toFixed(8);
					break;
				case "/":
					if (secondNumber == 0) {
						zero = true;
						break;
					}
					result = parseFloat( parseFloat(firstNumber) / parseFloat(secondNumber) ).toFixed(8);
					break;
				default:
					// statements_def
					break;
			}
			if (zero) {
				document.getElementById("show-window").value = "NaN";
				firstNumber = null;
				secondNumber = null;
				zero = false;
			}else {
				document.getElementById("show-window").value = mathnum2Shownum(result);
			    secondNumber = null;
			    firstNumber = shownum2Mathnum(document.getElementById("show-window").value);
			}
		}
	}
}




// 	for(var i = 0; i < inputs.length; i++){
// 		inputs[i].onclick = function(){
// 			if(document.getElementById("show-window").value == '0')
// 			{
// 				document.getElementById("show-window").value = "";
// 				document.getElementById("show-window").value += this.value;
// 				firstNumber = document.getElementById("show-window").value;
// 			}
// 			else{
// 				// 判断是否是操作第二位数
// 				if (operateSecondNumber) {			
// 					functionKey(this.value);
// 				}else{
// 					var temp = document.getElementById("show-window").value;
// 					var signMark = false;
// 					for(var i = 0; i < temp.length; i++){
// 						if (temp[i]=="-") {
// 							temp = temp.substring(0, i);
// 							temp += temp.substring(i);
// 							signMark = true;
// 						}
// 					}
// 					if (signMark) {
// 						temp += this.value;
// 						temp = temp + "-";
// 						document.getElementById("show-window").value = temp;
// 						firstNumber = shownum2Mathnum(temp);
// 						signMark = false;	
// 					}else{
// 						temp += this.value;
// 						document.getElementById("show-window").value = temp;
// 						firstNumber = shownum2Mathnum(temp);
// 					}			
// 				}
// 			}
// 		}	
// }