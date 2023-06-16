//any:타입스크립트에서만 제공되는 특별한 타입으로 타입 검사를
//받지 않는 특수한 치트키 타입이다.
//특정 변수의 타입을 우리가 확실히 모를떄

let anyVar: any = 10;

anyVar = "ST";

//any타입은 어떠한 타입 검사도 받지 않기 때문에
// 아무 타입의 값이나 범용적으로 담아 사용 가능

let anyVar2: any = 10;

anyVar2 = "hello";

let num: number = 10;

anyVar2 = num;

//그러나 any타입의 사용을 권장하지 않는다 Ts에서 any타입으로 오류를 피할 수 있을지 모르지만
//런타임 오류가 발생할 수 있다.

//unknown:any타입과 비슷하지만 보다 안전한 타입이다.
//unknown타입은 독특하게도 변수의 타입으로 정의되면 모든 값을 할당받을 수 있지만
//반대로 unknown타입의 값은 그 어떤 타입 변수에도 할당 할 수 없다.

let unknownVar: unknown;

unknownVar = 10;

//이렇게 명시적으로 조건문을 이용해 이 값이 number타입의 값임을 보장해줘야 한다.
if (typeof unknownVar === "number") {
  unknownVar * 2;
}
//unknown타입과 any타입 차임: 다른 타입 변수에 unknown타입을 부여할 수 없다.
