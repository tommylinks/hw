
// 1 task 1 option
var s = 0;

function sum (v) {
	return s = s + (parseInt(v) || 0);
}


// 1 task 2 option
function sum() {

	var s = 0;
	return function(v) {
		return s = s + v;
	}
}

var s = sum();


// 2 task

function f(c) {

	var o = {};

	console.log(o);

	c(o);

	console.log(o);
}


f(function(o) {
	o.a = 1;
});
