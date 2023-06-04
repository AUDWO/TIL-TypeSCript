//타입 별칭 = 타입을 변수처럼 사용할 수 있다.
let user = {
    id: 1,
    name: "audwo",
};
let user1 = {
    id: 1,
    name: "adwd",
    nickname: "adw",
    birth: "1-101010",
    bio: "dwdwq",
    location: "dwdq",
};
let countryCodes = {
    Korea: "Ko",
    UnitedState: "Us",
};
export {};
/*type CountryNumberCodes = {
    [key:string]:number;
    Korea:string
    반드시 지정해준 인덱스 시그니처의 value값이랑 같은 타입을 선언 해줘야 한다.
}*/
