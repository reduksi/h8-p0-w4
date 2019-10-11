function cariMedian(arr) {
    var lok, lok2;
    if(arr.length % 2 == 0){
        lok = arr.length / 2 - 1;
        var med = (arr[lok] + arr[lok + 1]) / 2;
        return med;
    }else{
        lok = Math.round(arr.length / 2) - 1;
        return arr[lok];
    }
  }

  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5