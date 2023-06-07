/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환 되는가?
 * 2. 매개변수의 타입이 호환 되는가?
 */
let a = () => 10;
let b = () => 10;
//B타입을 A타입으로 취급
a = b;
let aa = (value) => { };
let bb = (value) => { };
// aa = bb 업캐스팅이라 안됨
bb = aa;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let DogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.age);
};
// animalFunc = DogFunc; 업캐스팅이라 불가
//아래 함수처럼 만들어지는 것
let testFunc = (animal) => {
    console.log(animal.name);
    //console.log(animal.age);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
export {};
// func2 = func1 불가
