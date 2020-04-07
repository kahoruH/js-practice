/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length;
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  return str.length % 2 === 0;
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  return str.slice(0,1);
}

/**
 *  4.4 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  return str.slice(a - 1, b);
}

/**
 *  4.5 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 *
 */

function isInclude(a, b) {
  return a.includes(b);
}

/*
function isInclude(a, b) {
  for(let i = 0; i < a.length; i++) {
     if (b[0] === a[i]) { // 先頭の文字が一致したら
       let str = b[0]
       for (let j = 1; j < b.length; j++) { // 先頭の文字が一致した箇所から、全ての文字が一致するかを確認するループ
         if (b[j] === a[i + j]) { 
           str += b[j] // 文字が一致したら一文字ずつstrに追加
         }
       }
       if (str === b) { // 上のループで全ての文字列が一致するか？
         return true
       }
     }
  }
  return false
}*/

/**
 *  4.6 引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  const reversedStr = [];
  for(let i = str.length - 1; 0 <=i; i--){
    reversedStr.push(str[i])
  }
  return str === reversedStr.join('');
}
