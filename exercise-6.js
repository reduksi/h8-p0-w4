function digitPerkalianMinimum(angka) {
    var hasil;
    var digit = angka.toString().length * 3; 
    for(var i = 0; i <= angka; i++){
        var tampung = digit;
        hasil = angka / i;
        if(angka % i === 0){
            hasil = hasil.toString() + i.toString();
            tampung = hasil.length;
        }
        if(digit > tampung){
            digit = tampung;
        }
    }
    return digit;
   
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2