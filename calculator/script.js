var expression = "";
var output = ""; 

const numOp = document.querySelectorAll(
  ".keys:not(:nth-child(15n),:nth-child(14n))"
);
const screen = document.getElementById("screen");
const evaluateBtn = document.getElementById("evaluate"); 
const clear = document.getElementById("clear");

const handleKey = (e) => {
  const dataVal = e.target.getAttribute("data-val");
  expression += dataVal;
  screen.textContent = expression;
};

evaluateBtn.addEventListener("click", () => {
  try {
    var result = eval(expression);
    screen.textContent = result;
  } catch {
    screen.textContent = "ERROR"; 
  }
  expression = "";
});

clear.addEventListener("click", () => {
  expression = "";
  screen.textContent = "0"; 
});

numOp.forEach((item) => {
  item.addEventListener("click", handleKey);
});
const keys = document.querySelectorAll(".keys");

keys.forEach((item) => {
  item.addEventListener("mousedown", () => {
    
    item.classList.add("clicked");
  });

  item.addEventListener("mouseup", () => {
    
    item.classList.remove("clicked");
  });
});
