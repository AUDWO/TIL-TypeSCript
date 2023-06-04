import { allowedNodeEnvironmentFlags } from "process";

function Never() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //let never1:never = "sdwd"
}
