let input = document.querySelector(".input");
let inputs = document.querySelectorAll(".input");
let submit = document.getElementById("submit");

for (let i = 0; i < inputs.length; i++) {
  inputs[0].addEventListener("paste", (e) => {
    if (e.clipboardData.getData("text")[i] !== undefined) {
      inputs[i].value = e.clipboardData.getData("text")[i];
    }
    // if (inputs[inputs.length - 1].value) {
    //   submit.click();
    // }
  });
  inputs[i].addEventListener("input", () => {
    if (inputs[i].value && inputs[i + 1] !== undefined) {
      inputs[i + 1].focus();
    }
    if (inputs[i].value.length > 1) {
      inputs[i].value = inputs[i].value.substr(0, 1);
    }
  });
}
