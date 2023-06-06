//함수 오버로딩
//함수를 매개변수의 개수나 타입에 따라
//여러가지 버전으로 정의하는 방법

// 버전들
//함수의 구현 없이 선언식만 써 놓은걸
//->오버로드 시그니쳐:함수 오버로딩에 쓰기 위해 각각의 버전을 명시해주기 위해 쓰는 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number): void {
  //if (typeof b === "number" && typeof c === "number") {
  if (b !== undefined && c !== undefined) {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

//func(); //여기에 해당하는 오버로드 시그니쳐가 없음
func(1);
func(1, 2, 3);
