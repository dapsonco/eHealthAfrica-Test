function rotateArray(initialArray, noOfRotation){
  var start = 0;
  var length = initialArray.length - 1;

	for (var i = 0; i <= length; i++) {
    	if (i + noOfRotation <= length) {
       		newArray[i + noOfRotation] = initialArray[i];
      		 start++;
   		 } else {
       			newArray[i - start] = initialArray[i];
    		}
	};
return newArray;
} 

//Testing the created function

var array = [1, 2, 3, 4, 5, 6];
var n = 2;
rotateArray(array, n);

//Result [5, 6, 1, 2, 3, 4]

