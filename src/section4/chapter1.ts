//함수 타입 표현식
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

const sub: Add = (a, b) => a - b;

const dev: Add = (a, b) => a / b;

/**
 * 호출 시그니처
 * 콜 시그니처
 */

type Operation = {
  (a: number, b: number): number;
};

const add2: Operation = (a, b) => a + b;

const sub2: Operation = (a, b) => a - b;

const dev2: Operation = (a, b) => a / b;
