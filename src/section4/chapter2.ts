/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환 되는가?
 * 2. 매개변수의 타입이 호환 되는가?
 */

//기준 1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

//B타입을 A타입으로 취급
a = b;

//기준 2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을때 -> 업캐스팅은 불가

type AA = (value: number) => void;

type BB = (value: 10) => void;

let aa: AA = (value) => {};
let bb: BB = (value) => {};

// aa = bb 업캐스팅이라 안됨

bb = aa;

//예시 상황
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  age: number;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let DogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.age);
};

// animalFunc = DogFunc; 업캐스팅이라 불가
//아래 함수처럼 만들어지는 것
let testFunc = (animal: Animal) => {
  console.log(animal.name);

  //console.log(animal.age);
};

// 2-2. 매개변수 개수가 다를 때 -> 매개변수의 타입은 같아야 한다.

type Func1 = (a: number, b: number) => void;

type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;

// func2 = func1 불가
