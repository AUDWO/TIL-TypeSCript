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
  isBark: boolean;
}
