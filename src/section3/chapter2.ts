//슈퍼 타입
type Animal = {
  name: string;
  color: string;
};

//서브 타입
type Dog = {
  name: string;
  color: string;
  breend: string;
};

let animal: Animal;

let dog: Dog = {
  name: "colly",
  color: "brown",
  breend: "dontknow",
};

animal = dog;

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

type Book = {
  name: string;
  price: number;
};

let programmingBook: ProgrammingBook = {
  name: "About-react",
  price: 20000,
  skill: "react",
};

/*
초과 프로퍼티 검사:변수를 초기화 할 때 
초기화하는 값으로 객체 리터럴을 쓸 때 기존에 정의해줬던 프로퍼티 이외에 프로퍼티가 있는지 확인하는 검사
 */

/**
 * 객체 리터럴 방식으로 초기화 하는 것은 안됨
 * 리터럴: 값을 바인딩하는 방법중 하나입니다.
 *
 */

let book1: Book = programmingBook;

console.log(book1.price); //20000
