/**
 * 타입 추론
 */
let d; //any타입으로 추론됨
d = 10;
d.toFixed();
d = "hello";
d.toUpperCase();
const num = 10;
const str = "hello";
let arr = [1, "string"];
export {};
//리터럴 값을 통해 ts가 타입을 추론함
