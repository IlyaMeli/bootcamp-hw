let submit = document.querySelector(".submit");
let message = document.querySelector(".message");
let textarea = document.querySelector("textarea");
let x = document.querySelector(".x");

console.log(textarea.value.length);

submit.addEventListener("click", () => {
  if (textarea.value.length < 100) {
    message.style.display = "block";
  } else {
    textarea.value = "Sent! :D ";
  }
});

x.addEventListener("click", () => {
  message.style.display = "none";
});
