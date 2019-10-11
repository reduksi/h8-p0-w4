function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];  
    var result = [];
    for(var i = 0; i < arrPenumpang.length; i++){
        var obj = {};
        obj['penumpang'] = arrPenumpang[i][0];
        obj['naikDari'] = arrPenumpang[i][1];
        obj['tujuan'] = arrPenumpang[i][2];
        obj['bayar'] = (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000;
        result.push(obj);
    }    
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]