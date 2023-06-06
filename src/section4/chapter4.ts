/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

/*
property 이름을 기준으로 타입을 좁히면 직관적으로 보기 좋지 않음
이름을 기준으로 하기 때문에 이름이 바뀌면 매번 다시 설정해야함
function warning(animal: Animal){
    if("isBark" in animal){
        //강아지
        animal
    } else if("isScratch" in animal) {
        //고양이
    }
}
*/

//타입가드 함수 역할
//함수의 리턴값이 참이면 인수로 전달한 animal이라는 값이 Dog타입이겠구나 알아먹음
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else if (isCat(animal)) {
    animal;
  }
}
