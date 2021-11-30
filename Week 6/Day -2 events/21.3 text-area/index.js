let submit = document.querySelector(".submit");
let message = document.querySelector(".message");
let textarea = document.querySelector("textarea");
let close = document.querySelector(".x");

const handleText = (e, num) => {
  console.log(e);
  if (textarea.value.length < num) {
    message.style.display = "block";
  } else {
    textarea.value = "Sent! :D ";
  }
};
console.log(textarea.value.length);

submit.addEventListener("click", (e) => handleText(e, 100));

close.addEventListener("click", () => {
  message.style.display = "none";
});
