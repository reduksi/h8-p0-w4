function urutkanAbjad(str) {
    var arrStr = str.split('');
    arrStr.sort();
    var hasil = '';
    for(var i =  0; i < arrStr.length; i++){
        hasil += arrStr[i];
    }
    return hasil;
  }
  
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'