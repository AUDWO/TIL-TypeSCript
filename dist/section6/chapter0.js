class Employee {
    //필드
    name;
    age;
    position;
    //생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    //메서드
    work() {
        console.log("일함");
    }
}
const employeeB = new Employee("김명재", 21, "개발자");
console.log(employeeB);
//클래스를 타입으로써 활용할 수 있음
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
//클래스 확장하기
class ExecutiveOfficer extends Employee {
    //필드
    officerNumber;
    constructor(name, age, position, officerNumber) {
        super(name, age, position);
        this.officerNumber = officerNumber;
    }
}
export {};
