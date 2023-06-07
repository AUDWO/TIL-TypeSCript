//void->공허->아무것도 없음을 의미하는 타입.
function func1() {
    return "hello";
}
//return문을 사용하고 싶지 않은 함수에 void를 써준다
function func2() {
    console.log("hello");
}
function func3() {
    throw new Error();
}
export {};
