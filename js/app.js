$(document).ready(function() {

	var input = prompt("Please enter an integer greater than zero.");
	var integer = parseInt(input, 10);

	if (input.length === 0) {
		document.write("Please enter a valid integer.");	
	} else if (($.trim(input)).length === 0) {
		document.write("Please enter a valid integer.");
	}
	else if (input % 1 != 0) {
		document.write("Please enter a valid integer.");
	} else {

	var game = function(integer) {
		for (var i = 1; i <= integer; i++) {
			if (i % 15 === 0) {
				console.log("Fizzbuzz!");
				document.write("Fizzbuzz!");
				document.write("<br>");
			} else if (i % 3 === 0) {
				console.log("Fizz!");
				document.write("Fizz!");
				document.write("<br>");
			} else if (i % 5 === 0) {
				console.log("Buzz!");
				document.write("Buzz!");
				document.write("<br>");
			} else {
				console.log(i);
				document.write(i);
				document.write("<br>");
			}
		};
	};
	game(integer);

	};

});