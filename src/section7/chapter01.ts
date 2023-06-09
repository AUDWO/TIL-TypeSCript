//함수의 반환값 타입은 해당 함수의 리턴값을 기준으로 추론된다.

//제네렉 함수: 모든 타입을 두루두루 쓸 수 있는 범용적인 함수
//타입 변수:<T>
function func<T>(value: T): T {
  return value;
}

//타입 변수에 어떤 타입이 결정되냐는 함수를 호출 할 때 결정됨
let num = func(10);

let bool = func(true);

let str = func("string");

//함수를 호출하면서 명시적으로 우리가 타입을 정하는 것도 가능
let arr = func<[number, number, number]>([1, 2, 3]);
