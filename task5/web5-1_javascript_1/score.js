function judge_score() {
	// body... 
	var points = document.getElementById("inputscore").value;
	if (isNaN(points) || !points || points > 100 || points < 0) {
		// statement
		alert("请输入0-100的数字");
		return;
	}
	if (points <= 10) {
		// statement
		alert(10);
	}
	else if (points <= 20) {
	// statement
	if (points>10) {
		// statement
		alert(9);
	}
}
	else if (points <= 30) {
	// statement
	if (points > 20) {
		// statement
		alert(8);
	}
}
	else if (points <= 40) {
	// statement
	if (points > 30) {
		// statement
		alert(7);
	}
}
	else if (points <= 50) {
	// statement
	if (points > 40) {
		// statement
		alert(6);
	}
}
	else if (points <= 60) {
	// statement
	if (points > 50) {
		// statement
		alert(5);
	}
}
	else if (points <= 70) {
	// statement
	if (points > 60) {
		// statement
		alert(4);
	}
}
	else if (points <= 80) {
	// statement
	if (points > 70) {
		// statement
		alert(3);
	}
}
	else if (points <= 90) {
	// statement
	if (points > 80) {
		// statement
		alert(2);
	}
}
	else if (points <= 100) {
	// statement
	if (points > 90) {
		// statement
		alert(1);
	}
}
	// alert(points);
}