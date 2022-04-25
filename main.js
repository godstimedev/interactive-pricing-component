const inputRange = document.getElementById("range-input");
const price = document.getElementById("price");
const toggle = document.getElementById("toggle");
const toggleCircle = document.getElementById("circle");

let toggleOff = true;

toggle.addEventListener("click", () => {
  toggleOff = !toggleOff;
  toggleOff
    ? (toggleCircle.style.transform = "translate(10%, -50%")
    : (toggleCircle.style.transform = "translate(120%, -50%)");
});

inputRange.oninput = function () {
  if (toggleOff) {
    price.innerText = this.value + ".00";
  } else {
    const discount = this.value - 0.25 * this.value;
    if (Number.isInteger(discount)) {
      price.innerText = discount + ".00";
    } else {
      price.innerText = discount;
    }
  }
};
