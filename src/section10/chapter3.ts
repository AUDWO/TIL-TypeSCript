/**
 * Exclude<T, U>
 * -> T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>;

//ts에서 제공 but 직접 구현
type Exclude1<T, U> = T extends U ? never : T;

//1단계
//Exclude<string, boolean> |
//Exclude<boolean, boolean>

//2단계
//string |
//never

//최종적으로는
//string
//-------------------------------------------------------------------------

/**
 * Extarct<T, U>
 * -> T에서 U를 추출하는 타입
 */
//ts에서 제공 but 직접 구현
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

//-------------------------------------------------------------------------
/**
 * ReturnType<T>:함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;

//ts에서 제공 but 직접 구현

type ReturnType1<T extends (...arg: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type ReturnA1 = ReturnType1<typeof funcA>;
//타입변수 T로 ()=>string타입이 전달 됨
//그 후 ()=>string이 서브타입이 되도록 하는 R을 추론
