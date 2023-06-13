/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

//분산적인 조건부 타입을 이용하면 일반적 작동방식이 바뀐다'
let c: StringNumberSwitch<number | string>;

//StringNumberSwitch<number>
//StringNumberSwitch<string>
//총 이렇게 두번 실행되고 나온 타입들을 유니언 타입으로 묶는다.

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
//1단계
//Exclude<number, string> |
//Exclude<string, string> |
//Exclude<boolean, string>

//2단계
//number |
//never |
//boolean

//결과
//number | never | boolean -> number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

//만약에 분산 조건부 타입을 이용하고 싶지 않다면

type StringNumberSwitch3<T> = [T] extends [number] ? string : number;

let d: StringNumberSwitch3<boolean | string | number>;

//boolean, string, number 합집합이 [T]에 들어가기 때문에 무조건 number가 나온다.
