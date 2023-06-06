//어떤 [타입]의 매개변수를 받고 어떤 [타입]의 결과값을 반환하는지
function func(a: number, b: number) {
  return a + b;
}

const add = (a: number, b: number) => {
  return a + b;
};

/**
 * 함수의 매개변수
 */
function introduce(name: string, age?: number) {
  console.log(`name:${name}`);
  if (typeof age === "number") {
    console.log(`age:${age - 1}`);
  }
}

function getSum(...rest: number[]) {
  let sum = 0;
  console.log(rest);
  rest.forEach((it) => (sum += it));
  console.log(sum);
  return sum;
}

getSum(1, 2, 3, 4, 5); //15

console.log("dwdw");
