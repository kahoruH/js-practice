/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for(var i = 0; i <= 10; i++){
    console.log(i);
  }
}

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 *
 */

function printOneToTenDesc() {
  for(var i = 10; i >= 0; i--){
    console.log(i);
  }
}

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  var i = 0;
  while(i <= 10){
    console.log(i);
    i++;
  }
}

