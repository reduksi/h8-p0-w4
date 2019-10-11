function ubahHuruf(kata) {
    var kataBaru = '';
    for(var i = 0; i < kata.length; i++){
        var hurufBaru = String.fromCharCode(kata[i].charCodeAt(0) + 1);
        kataBaru += hurufBaru;
    }
    return kataBaru;
  }
  
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu