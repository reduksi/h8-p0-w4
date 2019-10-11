function cariModus(arr) {
    var tampung = 1;
    var modus = -1;
    for(var i = 0; i < arr.length; i++){
        var counter = 1;
        for(var j = 0; j < arr.length; j++){
            if(i !== j && arr[i] === arr[j]){
                counter++;               
            }   
        }    
        if(counter > tampung){
            tampung = counter;
            modus = arr[i];
        }
    }
    if(tampung === arr.length){
        modus = -1;
    }
    return modus;
  }
  
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1