function formatArray(array){
 var length =array.length;
 var c;
  while(c=--length){
   while(c--){
     array[length] !== array[c] || array.splice(c,1);
   }
  }
 return array
}


// Testing the function created
// Input
var sortedArray = [1, 3, 7, 7, 8, 9, 9, 9, 10 ];

// Call the formatArray function
formatArray(sortedArray);

// Output [1, 3, 7, 8, 9, 10]
