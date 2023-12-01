const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";

  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
      convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000);
  });

  // Check for input value and enable/disable the "Convert" button
  degree.addEventListener("input", () => {
    if (degree.value === "") {
      convertBtn.setAttribute("disabled", "");
      setTimeout(() => {
        convertBtn.removeAttribute('disabled');
      }, 4000);
    } else {
      convertBtn.removeAttribute('disabled');
    }
  });
});

function convertToCelsius() {
  let inputValue = degree.value;

  if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
  }
}
