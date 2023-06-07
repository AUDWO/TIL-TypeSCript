/**
 * 인터페이스의 확장( 상속)
 */

import { LargeNumberLike } from "crypto";

interface Animal {
  name: string;
  age: number;
}

/*
interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}
*/

interface Dog extends Animal {
  //name프로퍼티의 타입을 내가 원하는 타입으로 재정의 할 수 있다.
  //단 기존 타입의 서브타입으로만 가능
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {}
