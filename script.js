const body = document.querySelector("body");
const inputLeft = document.querySelector(".input1");
const inputRight = document.querySelector(".input2");
const cssOutput = document.querySelector(".cssOutput"); //as they are just inviting tags so const is done

//getting the colors
let leftColor = inputLeft.value;
let rightColor = inputRight.value;

const changeBack = () => {
  const cssString = `linear-gradient( to right ,${leftColor}, ${rightColor})`;

  body.style.background = cssString;
  cssOutput.textContent = `background: ${cssString};`;
};

changeBack();

inputLeft.addEventListener("change", (event) => {
  leftColor = event.target.value;
  changeBack();
});

inputRight.addEventListener("change", (event) => {
rightColor = event.target.value;
   changeBack();
})