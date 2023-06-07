/**
 * 접근 제어:클래스를 만들때 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 것
 * access modifier
 * => public:초기 설정 값 private:오직 클래스 내부에서만 protected:파생(자식)클래스에서 까지만 허용
 */

//정의식

class Employee1 {
  private name: string;
  public age: number;
  public position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.name}`);
  }
}

//활용1

class Employee2 {
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  work() {
    console.log(`${this.name} 일함`);
  }
}

let employee1 = new Employee2("김명재", 21, "developer");
console.log(employee1.work());

//활용2

class Employee3 {
  constructor(
    private name: string,
    public age: number,
    public position: string
  ) {}

  work() {
    console.log(`${this.name} 일함`);
  }
}

//클래스 확장

class ExEmployee extends Employee3 {
  //필드
  bb: string;
  constructor(name: string, age: number, position: string, bb: string) {
    super(name, age, position);
    this.bb = bb;
  }

  func() {
    // console.log(`${this.name}`) 불가 코드
  }
}
