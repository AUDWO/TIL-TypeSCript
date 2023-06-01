//타입 별칭 = 타입을 변수처럼 사용할 수 있다.

let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "audwo",
};

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
