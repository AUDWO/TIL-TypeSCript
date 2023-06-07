//인터페이스(상호간에 약속된 규칙): 타입에 이름을 지어주는 또 다른 문법;
//(객체타입을 정의하는데 특화되어있음)

interface Person {
  name: string;
  age?: number;
  //함수 타입 표현식
  sayHi: () => void;

  //호출 시그니쳐:함수 오버로딩을 이용하기 위해선 호출 시그니쳐를 사용해야 한다.
  sayHello(): void;
  sayHello(a: number, b: number): void;
}

//타입별칭에서는 유니언 타입을 만들 수 있었고 인터섹션타입도 만들 수 있었다.
/**
type Type1 = number | string;
type Type2 = number & string; 

그러나 interface에서는 유니언타입이나 인터섹션타입을 만들 수 없다.
그래서 interface로 만든 객체를 유니언이나 인터섹션에 이용해야 한다고 하면
타입 별칭에 활용해야 한다.
 */
