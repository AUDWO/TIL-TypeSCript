//타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터

/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string> = {
  key: true,
  value: "value",
};

/**
 *인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -12321,
};

interface Map<T> {
  //보통 key는 string타입으로 쓰니깐 string으로 고정
  [key: string]: T;
}

let stringMap: Map<string> = {
  key: "value",
};

//하나의 타입으로 다양한 객체를 생성할 수 있다.

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello,",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface developer {
  type: "developer";
  skill: string;
}

interface User {
  name: string;
  profile: Student | developer;
}

const developerUser: User = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "korea",
  },
};

/*
이렇게 함수를 작성하면 각 타입마디 이런식으로 타입 가드를 작성해야 한다.

function goToSchool(user:User) {
    if(user.profile.type !== "student"){
        console.log("잘 못 오셨습니다.");
        return;
    }

    const school =  user.profile.school;
    console.log(`${school}로 등교 완료`)
}

*/

/**
 * 제네릭 인터페이스 활용
 */
interface User2<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User2<Student>) {
  const school = user.profile.school;
  console.log(`${school}에 잘 오셨습니다.`);
}

let studentUser2: User2<Student> = {
  name: "김명재",
  profile: {
    type: "student",
    school: "korea",
  },
};

goToSchool(studentUser2);
