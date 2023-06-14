/**
 * 유틸리티 타입
 * 제네릭, 맵드 타입, 조건부 타입 등의 타입 조작 기능을 이용해
 * 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것
 */

//예시1

interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "김명재",
  age: 27,
};

//person.name = "" => 에러 발생

//예시2

interface Person2 {
  name: string;
  age: number;
}

const person2: Partial<Person> = {
  name: "김명재",
};
