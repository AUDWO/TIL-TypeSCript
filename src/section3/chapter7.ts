/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기한다.
 
 */

//이렇게 타입을 좁혀주는 if문을 타입 가드라고 한다.
function func(value: number | string | Date) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    //null에 typeof를 적용해도 object가 나옴
    console.log(value);
  }
  //else if(value instanceof Person)
  //instance뒤에 타입이 오면 안된다.
  else if ("age" in value) {
  }
}

/*
그냥 한번 적어봄
function add(num1:number,num2:number):number{
    return num1+num2

}*/
