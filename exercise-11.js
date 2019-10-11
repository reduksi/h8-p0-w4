function shoppingTime(memberId, money) {
    var produk = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000],
    ];
    var cart = [];
    var total = 0;
    if(memberId == '' || memberId == undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }

    for(var i = 0; i < produk.length; i++){
        if(money - produk[i][1] >= 0){
            money -= produk[i][1];
            total += produk[i][1];
            cart.push(produk[i][0]);
        }
    }
    if(total == 0){
        return 'Mohon maaf, uang tidak cukup';
    }
    var obj = {
        'memberId': memberId,
        money: total,
        listPurchased : cart,
        changeMoney:money
    }
    return obj;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja