var input = document.getElementById("trip");
var button = document.getElementById("submit-button");

var timeout = null;

button.addEventListener("click", function (event) {
  event.preventDefault();
  clearTimeout(timeout);
  button.classList.add("is-loading");
  button.disabled = true;
  input.disabled = true;
});

input.addEventListener("keyup", function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    button.classList.add("shake");
  }, 1000);
});
button.addEventListener("animationend", function () {
  button.classList.remove("shake");
});
