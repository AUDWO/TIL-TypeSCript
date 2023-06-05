/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */
let a;
/*function login(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}`);
  }
}
let kim: Admin = {
  name: "dwd",
  kickCount: 23,
  tag: "ADMIN",
};
login(kim);
*/
function login(user) {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}입니다`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님이 현재까지 ${user.point}모았습니다`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`);
        }
    }
}
//타입이 잘 좁혀지는 것을 볼 수 있다.
//여러가지 상태를 표현하기 위해 ?(선택적 프로퍼티)보다 타입들을 잘개 쪼개어
//서로소 유니언 타입으로 나타내는것이 훨 씬 좋다.
function processResult(task) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생: ${task.error.message} `);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
        }
    }
}
const loading = {
    state: "LOADING",
};
const failed = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은~~",
    },
};
const success = {
    state: "SUCCESS",
    response: {
        data: "데이터~~",
    },
};
export {};
