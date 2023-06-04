/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

import { InflateRaw } from "zlib";

/**
 * 1.합집합 -Union 타입
 */

//a는 Union타입
//기본 타입일때
let a: string | number;

a = 1;
a = "hello";

let arr: (string | number)[] = [1, "hello"];

//객체 타입일때
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "de",
  color: "red",
};

let union2: Union1 = {
  name: "dwdw",
  language: "wdwdw",
};

/**
 * 2.교집합 타입 - Intersection 타입
 */

//기본 타입일떄는 거의 never로 간주됨
let variable: number & string;

//객체 타입일때

type A = {
  name: string;
  color: string;
};

type B = {
  name: string;
  number: number;
};

type Intersection = A & B;

let intersection: Intersection = {
  name: "dwdw",
  color: "dwdwd",
  number: 29,
};
