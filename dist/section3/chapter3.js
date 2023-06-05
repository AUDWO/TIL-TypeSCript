/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */
/**
 * 1.합집합 -Union 타입
 */
//a는 Union타입
//기본 타입일때
let a;
a = 1;
a = "hello";
let arr = [1, "hello"];
let union1 = {
    name: "de",
    color: "red",
};
let union2 = {
    name: "dwdw",
    language: "wdwdw",
};
/**
 * 2.교집합 타입 - Intersection 타입
 */
//기본 타입일떄는 거의 never로 간주됨
let variable;
let intersection = {
    name: "dwdw",
    color: "dwdwd",
    number: 29,
};
export {};
