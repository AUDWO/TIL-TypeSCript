let multiArr: (number | string)[] = [1, "hello"];

let doubleArr: number[][] = [
  [1, 2, 3],
  [112, 3, 2],
];

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

let gatsby: {
  id?: number;
  name: string;
};

gatsby = {
  name: "m",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "akakdk",
};

//config.apiKey = "dwdw";
//이런식으로 값을 변경할 수 없음