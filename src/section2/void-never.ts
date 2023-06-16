//void타입:->공허->아무것도 없음을 의미하는 타입.

function func1(): string {
  return "hello";
}

//return문을 사용하고 싶지 않은 함수에 void를 써준다
function func2(): void {
  console.log("hello");
}

function func3(): never {
  throw new Error();
}

//변수에도 void타입을 지정할 수 있다.
//그러나 void타입을 지정해준 변수에는 undefined값밖에 할당하지 못한다.

let a: void;
a = undefined;

//never타입:불가능을 의미하는 타입

//함수가 어떤 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을
//정의할 때 사용됨
function func4(): never {
  while (true) {}
}

//또한 의도적으로 error를 발생시키는 함수의 반환값타입도 never로 지정

function func5() {
  throw new Error();
}
