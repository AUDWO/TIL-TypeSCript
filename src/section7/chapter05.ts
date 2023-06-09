/**
 * 제네릭 클래스
 */

class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

//이렇게 만들어 놓으면 string타입의 배열을 다루고 싶을때는 다루지 못한다.
class List<L> {
  constructor(private list: L[]) {}

  push(data: L) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

//제네릭 클래스는 제네릭 인터페이스와 제네릭 타입 변수와는 다르게 생성자의 인수로 전돨되는 값을 기준으로 타입이 결정됨

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["a", "b", "c"]);
stringList.push("hello");
