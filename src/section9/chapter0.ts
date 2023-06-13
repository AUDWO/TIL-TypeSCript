/**
 * 조건부 타입
 */

//number extends string은 거짓이기 때문에 number타입으로 결정됨
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? number : T;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<boolean>;

let varC: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else {
    return undefined as any;
  }
}

let result22 = removeSpaces(1);
let result = removeSpaces("hi im winterlood");

console.log(`인정하빈다${result22}`);

function removeSpaces2<T>(text: T): T extends string ? string : undefined;
function removeSpaces2(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result2 = removeSpaces("hi im winterlood");
