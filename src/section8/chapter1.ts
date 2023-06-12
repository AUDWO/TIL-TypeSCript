/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

const poerson: Person = {
  name: "이정환",
  age: 27,
};

/*
이렇게 코드를 짜면 나중에 추가되는 프로퍼티에 민감하기 때문에 별로 좋지 않음

function getPropertyKey(person:Person, key: "age" | "name"){
    return person[key];
}
*/

//이런식으로 keyof를 이용하면 property 생성유무에 영향을 받지 않아도 된다.
function getPropertyKey2(person: Person, key: keyof Person) {
  return person[key];
}

//typeof
type Person3 = typeof person2;

const person2 = {
  name: "이정환",
  age: 27,
  location: "대전",
};

function getPropertyKey3(person: Person3, key: keyof typeof person2) {
  return person[key];
}
