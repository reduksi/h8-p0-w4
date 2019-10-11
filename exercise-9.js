function checkAB(num) {
    var conf = false;
    for(var i = 0; i < num.length; i++){
        if(num[i] === 'a' && num[i + 4] == 'b') {
            conf = true;
        }else if(num[i] === 'b' && num[i + 4] == 'a'){
            conf = true;
        }
    } return conf;
  }
  
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false