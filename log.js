var number = 6;
var divider = 3;
var division = function() {
	result = (number / divider) * Math.floor((Math.random() * 1000) + 1);
	console.log(result);
}

division();
