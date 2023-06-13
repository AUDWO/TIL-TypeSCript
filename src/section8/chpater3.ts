/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const ColoredAnimal: ColoredAnimal = "black-cat";

let l = new Date();
console.log(l);
function getDate(date: Date | string): Date {
  if (date instanceof Date) {
    return date;
  }

  return new Date(date);
}

let p = getDate("sqs");
console.log(p);

enum Prize {
  Gold,
  Silver,
  Bronze,
}

console.log(Prize);
console.log(Prize.Silver);

console.log(Prize[1]);
