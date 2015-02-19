function convertToHex(num) {
  var results = [];
     do {
        var hexDigit = num % 16;
        num = Math.floor(num / 16);
        results.push(toHex(hexDigit));

       if (num < 16) {
          results.push(toHex(num));
       }
         }
    while (num > 15);

    newHex = results.reverse().join('');
    console.log(newHex);
  }


  function toHex(num) {
    if (num === 10){
      num = 'A';
      return num;
    }

     else if (num === 11) {
        num = 'B';
       return num;
     }

    else if (num === 12) {
        num = 'C';
       return num;
     }

    else if (num === 13) {
        num = 'D';
       return num;
     }

    else if (num === 14) {
        num = 'E';
       return num;
     }

     else if (num === 15) {
        num = 'F';
       return num;
     }

    else {
      return num;
    }
  }
