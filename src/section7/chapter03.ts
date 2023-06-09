/**
 * map 메소드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);

//map(["hi",'hello'],(it)=> parseInt(it));
//리턴 타입과 파라미터 타입이 맞지 않음
//타압 변수에 새로운 변수(U)를 추가하면서

const arr2 = [1, 2, 3];

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});
