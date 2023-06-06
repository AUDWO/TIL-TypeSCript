//어떤 [타입]의 매개변수를 받고 어떤 [타입]의 결과값을 반환하는지
function func(a, b) {
    return a + b;
}
const add = (a, b) => {
    return a + b;
};
/**
 * 함수의 매개변수
 */
function introduce(name, age) {
    console.log(`name:${name}`);
    if (typeof age === "number") {
        console.log(`age:${age - 1}`);
    }
}
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}
getSum(1, 2, 3, 4, 5); //15
export {};
