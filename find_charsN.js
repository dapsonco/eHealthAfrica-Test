function find_charsN(str1,str2){ 
  
  var st = str2.split("");
  var s = "";
  for (var x = 0; x < str1.length; x++){
    if((st.indexOf(str1[x]) > -1)){
      s+=str1[x]
    }
  }
  return s;
}
