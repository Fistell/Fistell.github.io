const progressRadius = 80;
const progressLength = 2 * Math.PI * progressRadius;

const progress = document.querySelector(".progress-bar");
const backgroundBar = document.querySelector(".background-bar");

const valueInput = document.querySelector(".input");
valueInput.addEventListener("change", updateProgress);

const animationSwitch = document.querySelector("#animate");
animationSwitch.addEventListener("change", toggleAnimation);

const hideSwitch = document.querySelector("#hide");
hideSwitch.addEventListener("change", toggleDisplay);

initIndicator();

function initIndicator() {
  progress.style.strokeWidth = 10;
  progress.style.stroke = "rgb(255, 219, 77)";

  progress.style.strokeDasharray = progressLength + "px";

  valueInput.value = "50";
  progress.style.strokeDashoffset = progressLength / 2 + "px";
}

function updateProgress(event) {
  if (checkValidity(valueInput, "Please enter valid value between 0% and 100%")) {
    const percentage = event.target.value;
    progress.style.strokeDashoffset = (progressLength * (100 - percentage)) / 100 + "px";
  }
}

function toggleAnimation() {
  toggleClass(progress, "progress-bar_animated");
}

function toggleDisplay() {
  const className = "hidden";
  toggleClass(progress, className);
  toggleClass(backgroundBar, className);
}

/* Utils */
const errorContainer = document.querySelector(".error");

function checkValidity(input, message) {
  const isValid = input.validity.valid;
  if (!isValid) {
    errorContainer.innerHTML = message;
  } else {
    errorContainer.innerHTML = "";
  }

  return isValid;
}

function toggleClass(element, className) {
  element.classList.contains(className)
    ? element.classList.remove(className)
    : element.classList.add(className);
}
