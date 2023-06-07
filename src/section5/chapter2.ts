/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  //충돌: 동일한 프로퍼티를 다른 타입으로 정의하는것
  //name:number
  //주의!! 확장과 선언합침을 헷갈리지 말자
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */

/*

interface Lib {
    a:number;
    b:number;
}

let lib:Lib = {
    a:1,
    b:2,
    //갑자기 c프로퍼티를 넣어야 됨 그렇다고 무작정 넣으면 에러발생
    c:"hello"
}

그래서 모듈 보강을 이용

기존 코드에서 

interface Lib{
    c:string;
}

코드만 추가해주면 된다.

*/
