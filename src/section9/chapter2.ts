/**
 * infer
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; //string타입으로

type B = ReturnType<FuncB>;

//우리가 원하는 것은 함수의 타입을 그대로 갖는 타입을 갖고 싶은 것 뿐

type FuncAA = () => string;

type FuncBB = () => number;

type ReturnType2<T> = T extends () => infer R ? R : never;

type AA = ReturnType2<FuncAA>;

type BB = ReturnType2<FuncBB>;

//FuncAA함수 타입이 ()=> infer R타입의 서브타입이 되도록 R이 추론된다.

type CC = ReturnType2<number>; //타입추론 불가

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

type PromiseUnpack<T> = any;
