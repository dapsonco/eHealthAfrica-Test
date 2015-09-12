function find_charsNN(str1,str2){ 
  var mystring ="";
  var lengthA = str1.length;
  var lengthB = str2.length;
   for (var x = 0; x < lengthA; x++)
{
    var c = str1.charAt(x);
    for (var y = 0; y < lengthB; y++){
      
      if(c == str2.charAt(y) && mystring.indexOf(c) < 0){
      
         mystring = mystring + c
      }
    }
}
  return mystring;
}
