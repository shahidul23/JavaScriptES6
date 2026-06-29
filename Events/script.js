let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//   console.log("Btn 1 was click");
//   let a = 34;
//   let b = 3;
//   console.log(a + b);
//   console.log(e)
// };
btn1.addEventListener("click", () => {
  console.log("button was click - 1");
});
btn1.addEventListener("click", () => {
  console.log("button was click - 2");
});
const handler3 = () => {
  console.log("button was click - 3");
};
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", () => {
  console.log("button was click - 4");
});

let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("you are inside div");
// };
btn1.removeEventListener("click", handler3);

let currMod = "light";
let modeBtn = document.querySelector("#modeBtn");
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
  if (currMod === "light") {
    currMod = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMod = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMod);
});
