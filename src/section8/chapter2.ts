/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser2(): User {
  return {
    id: 1,
    name: "Sdw",
    age: 12,
  };
}

//맵드 타입:내가 원파는 프로퍼티만 업데이트 시켜주고 싶을때
type PartialUser = {
  //mapped타입이 정의하는 모든 프로퍼티가 선택적 프로퍼티가 된다.
  [key in "id" | "name" | "age"]?: User[key];
};

//더 업그레이드 버전

type PartialUser2 = {
  [key in keyof User]?: User[key];
};

//다른 맵드 타입 버전
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser3(): ReadonlyUser {
  //... 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

const specialUser = fetchUser3();
//specialUser.id = 1;
//이렇게 코드를 짜는건 불가능

/*
이렇게 코드를 짜면 updateUser함수에 들어갈 파라미터 값의 타입이 알맞지 않기 때문에 
에러 발생
function updateUser(user: User) {
  //...수정하는 기능
}

updateUser({
  age: 25,
});
*/

function updateUser(user: PartialUser2) {
  //...수정하는 기능
}

updateUser({
  age: 25,
});
