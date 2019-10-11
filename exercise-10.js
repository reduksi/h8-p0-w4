function changeMe(arr) {
    for(var i = 0; i < arr.length; i++){
        console.log( (i+2) + '. ' +arr[i][0] + ' ' + arr[i][1] + ':' );
        var umur;
        if(arr[i][3] == undefined){
            umur = 'Invalid Birth Year';
        }else{
            umur = 2019 - arr[i][3];
        }
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: umur
        }
        console.log(obj);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""