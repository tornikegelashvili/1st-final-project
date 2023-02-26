const form = document.querySelector("#sign-up__inner");
const city = document.querySelector("#city");
const zipCode = document.querySelector("#zipCode");
const select = document.querySelector("#coutries-select");
const btn = document.querySelector("#onSubmitButton");
const result = document.querySelector("#result");

const checkSelect = select => {
    if (select.value === "null") {
      return (result.innerHTML = "Please Choose Correct County");
    } else {
      return (result.innerHTML = "successfully sent");
    }
  };
  const checkCity = city => {
    if (city.value === "") {
      return (result.innerHTML = `Please Write Valid City`);
    }
    if (isNaN(city.value)) {
      return (result.innerHTML = "successfully sent");
    } else {
      return (result.innerHTML = `Please Write Valid City`);
    }
  };
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkCity(city);
    checkSelect(select);
  });