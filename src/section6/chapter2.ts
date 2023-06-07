/**
 * 인터페이스와 클래스:인터페이스를 이용해서 클래스의 설계도를 정의 할 수 있다.
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log("dwdw");
  }
}

interface CharacterInterface1 {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character1 implements CharacterInterface1 {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log("dwdw");
  }
}
