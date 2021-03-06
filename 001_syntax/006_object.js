/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  return {
    name: 'Bob',
    age: 32,
    gender: 'male'
  }
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  person.name = 'Mary';
  person.age = '37';
  person.gender = 'female';
  return person;
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

//再チャレンジ 4/7
function assignNumber(persons) {
  //let random = Math.random(); 0から1未満のランダムな少数値
  //let random = Math.random() * 11; 0から10までのランダムな少数値

  let object = {};
  for (let i = 0; i < persons.length; i++) {
    let random = Math.floor(Math.random() * 11); //floorメソッドで少数点以下を切り捨て
    object[persons[i]] = random;
  }
  return object;
}

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3], 1 => false
 *    [1, 2, 2, 3], 5 => true
 *    [] => false
 *
 */

//再チャレンジ 4/7
function isDuplicate(array) {
  let num = {};
  for(let i = 0; i < array.length; i++) {
    for(let j = 1; j <  array.length; j++) {
      if(num[array[i]] === num[array[j]]){
        return true;
      }
    } 
  }
  return false;
}