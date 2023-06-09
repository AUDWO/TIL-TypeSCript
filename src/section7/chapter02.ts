/**
 * 첫번째 사례
 */

import { get } from "http";

function swap<T, U>(a: T, b: U) {
  return [a, b];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

/*
error 발생

function returnFirstValue<T>(data: T) {
  return data[0] ;
}

error발생 이유: T 타입이 정해지지 않았기 때문에 unknown의 첫번째 인덱스 요소를 뽑을 수가 없음
*/

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let str = returnFirstValue([1, "hello", "mynameis"]); //str의 타입은 number | string 이렇게 유니언 타입이다.

function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValue2([1, "hello", "mynameis"]); //str이 number타입으로 잘 좁혀졌다.

/**
 * 세번째 사례
 */

// T라는 타입은 length가 number인 프로퍼티를 가지고 있는 객체로 확장하는 타입 ->length라는 프로퍼티를 가지고 있어여 함
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //var들이 number타입으로 결정되는 이유는 리턴값이 number타입이기 때문에

let var2 = getLength("12345");

let var3 = getLength({ length: 3 });
