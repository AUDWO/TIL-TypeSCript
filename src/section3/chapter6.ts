type Person = {
  name: string;
  age: number;
};

/*let person = {};
person.name = "이정환";
person.age = 17
에러 발생 이유: person타입이 그냥 빈 객체로 설정 되어서
*/

/*let person1 :Person = {}
person1.name="김명재";
person1.age = 21;
에러 발생 이유: 타입을 Person으로 정해줬는데 선언문에서 빈 객체를 선언해줌
*/

//타입 단언 (assertion)
//1.타입 추론의 한계 극복
//2.코드 가독성 향상
let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

/*let dog:Dog = {
    name:'돌돌이',
    color:'brown',
    breed:'진도',
}
에러 발생 이유:Dog타입으로 선언했기 때문에 초과 프로퍼티 검사에서 오류 발생
*/

//Dog타입으로 추론됨
let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <-단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; //A가 B의 슈퍼타입임
let num2 = 10 as unknown; //A가 B의 서브타입임

//let num3 = 10 as string 두 타입의 공집합이 없음

//다중 단언
let num3 = 10 as unknown as string;

/**
 * const 단언:수저잉 불가능해짐 (일일이 readonly를 붙어도 되지 않음)
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "red",
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "김명재",
};

//원래는 const len:number = post.author?.length;
const len: number = post.author!.length;
