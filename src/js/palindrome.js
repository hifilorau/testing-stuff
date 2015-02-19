function isPalindrome(str) {
   var strArray = str.split("");
   console.log(strArray);
   var ArrRev = strArray.reverse();
   console.log(ArrRev);
   var revStr = ArrRev.join("");
   console.log(revStr);

  if (str === revStr ){
    console.log("true");
    return true;
  }
  else {
    console.log("false");
    return false;
  }

}
