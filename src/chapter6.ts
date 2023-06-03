//void->공허->아무것도 없음을 의미하는 타입.

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
