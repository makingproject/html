function calculateVolume(length, breadth, height) {
	console.log(' length '+ length);  console.log(' breadth '+ breadth);
	console.log(' height '+ height);
        return length * breadth * height;
    }
    console.log(calculateVolume(4, 5, 7));
	
	
	var number = 2;
function Square (n) {
    var result = n * n;
    return result;
}
var newNumber = Square(4);
console.log('newNumber '+newNumber);

// Explanation of closure
/* 1 */	 function foo()
/* 2 */		 {
/* 3 */			 var g = 1;
                  let b = 5;
/* 4 */			 function inner(){
/* 5 */				 return b;
/* 6 */			 }
/* 7 */			 return inner;
/* 8 */		 }
/* 9 */		 var get_func_inner = foo();		

/* 10 */		 console.log(get_func_inner());
/* 11 */		 console.log(get_func_inner());
/* 12 */		 console.log(get_func_inner());
