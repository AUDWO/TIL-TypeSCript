// enum 타입 = 열거형 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//enum을 활용하면 value값이 뭘 의미했는지 어떤 값을 사용해야 했는지 헷갈릴때 유용하게 사용할 수 있다.

enum Role {
  ADMIN, //<-자동으로 숫자가 부여됨 0부터 만약 admin에 10을 부여한 10부터 시작 됨
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST,
};
