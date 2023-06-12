//타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: "value",
};
let numberMap1 = {
    key: -12321,
};
let stringMap = {
    key: "value",
};
let stringMap2 = {
    key: "hello,",
};
const developerUser = {
    name: "이정환",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "korea",
    },
};
function goToSchool(user) {
    //굳이 타입가드를 적지 않아도 된다.
    const school = user.profile.school;
    console.log(`${school}에 잘 오셨습니다.`);
}
let studentUser2 = {
    name: "김명재",
    profile: {
        type: "student",
        school: "korea",
    },
};
goToSchool(studentUser2);
let aa = {
    name: "ㅊㅊㅊ",
    profile: {
        type: "student",
        school: "dwdd",
    },
};
export {};
