import { concat } from "./concatenation";

const button = document.querySelector("button");
const input = document.querySelector("input");

if (input && button) {
  button.addEventListener("click", () => {
    concat("Hello", input.value);
  });
}
