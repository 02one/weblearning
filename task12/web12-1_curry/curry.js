

function curry (fn) {
	console.log('fn:'+fn);
	var args = Array.prototype.slice.call(arguments,1);
	console.log('arguments:'+arguments);
	console.log('args:'+args);
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		console.log('innerArgs:'+innerArgs);
		var finalArgs = args.concat(innerArgs);
		console.log('finalArgs:'+finalArgs);
		console.log('this'+this);
		return fn.apply(this,finalArgs);
	}
	
}

function add(num1,num2,num3){
	return num1+num2+num3;
}

var t = curry(add,50)(1,2);
console.log('t:'+t);