type Food = {
  protein: number;
  car: number;
  fat: number;
};

function cal(food: Food) {
  return console.log(`${food.protein}+${food.car}+${food.fat}`);
}

type Burger = Food & {
  vv: number;
};

let c: Burger = {
  protein: 2,
  car: 2,
  fat: 1,
  vv: 9,
};
cal(c);

function rem<T>(text: T): T extends string ? string : number {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else {
    return undefined as any;
  }
}

function removeSpaces2<T>(text: T): T extends string ? string : undefined;

function removeSpaces2(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

type Ref<T> = T extends () => infer R ? R : never;

type Func1A = () => string;

type A = Ref<Func1A>;
