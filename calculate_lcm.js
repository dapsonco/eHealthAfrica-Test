function calculateLCM(array){   
    var length = array.length;
    var absolute = Math.abs(array[0]);
    for (var i = 1; i < length; i++){
      
       var var1 = Math.abs(array[i]);
       var var2 = absolute;
       while (absolute && var1){ absolute > var1 ? absolute %= var1 : var1 %= absolute; } 
       absolute = Math.abs(var2*array[i])/(absolute+var1);
      
     }
    return absolute;
}

// Testing the function created
// Input
var array = [1,2,4,10,8,5];

// Call the calculateLCM function
calculateLCM(array);

// Output 40
