
// task 1 option 1 (using global var)

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

// var sum = 0;

// function func(arg) {

// 	if(isNumeric(arg)) {
// 		return sum += arg;
// 	} else {
// 		return 0;
// 	}

// }

// task 1 option 1 (using closures)


// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }





// var func = function(arg) {

// 	var sum = 0;

// 	if(isNumeric(arg)) {

// 		return function() {
// 			return sum += arg;
// 		}

// 	} else {
// 		return 0;
// 	}

// }

// var result = func;



// task 2


var myObj = {
	dima: 'Dima',
	age: 25
}

var resultFunc = function(obj) {
	obj.canRun = 'true';
	console.log(obj);
}

var func = function(f) {
	f(myObj);
}

func(resultFunc);


