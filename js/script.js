if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-01-JS/sw.js", {
    scope: "/Unit-5-01-JS/",
  })
}

;("use strict")

const randomNumber = Math.floor(Math.random() * 6) + 1

function myButtonClicked() {
  document.getElementById("answer").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "the answer was, " + randomNumber + "!" + " You got it! Good job."
  }

  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML =
      "the answer was, " + randomNumber + "!" + " Nice Guess! but try again."
  }
}
