function cal() {
	// body... 
	var firstNum = document.getElementById("firstItem").value;
	var secondNum = document.getElementById("secondItem").value;
	var sign = document.getElementById("sign").value;
	if(!firstNum || !secondNum || isNaN(firstNum) || isNaN(secondNum)){
		alert("请输入数字");
		return;
	}
	switch (sign) {
		case '+':
			// statements_1
			document.getElementById("result").value = parseFloat( (parseFloat(firstNum) + parseFloat(secondNum) ).toFixed(8));
			break;
		case '-':
			// statements_1
			document.getElementById("result").value = parseFloat( (parseFloat(firstNum) - parseFloat(secondNum) ).toFixed(8));
			break;
		case '*':
			// statements_1
			document.getElementById("result").value = parseFloat( (parseFloat(firstNum) * parseFloat(secondNum) ).toFixed(8));
			break;
		case '/':
			// statements_1
			if (secondNum == 0) {
				// statement
				alert("被除数不能为0");
				document.getElementById("result").value = "NAN";
				return;
			}
			document.getElementById("result").value = parseFloat(  (firstNum / secondNum).toFixed(8) );
			break;			
		default:
			// statements_def
			break;
	}

}