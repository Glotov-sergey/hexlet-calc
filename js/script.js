const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");
const popup = document.querySelector(".popup");

const caloriesForm = document.forms.counter;
const genders = caloriesForm
  .querySelector(".choose__block")
  .querySelectorAll("li");

// span с калориями
const normalCal = document.querySelector(".normal_cal");

// Выбор Гендера
genders.forEach((gender) => {
  gender.addEventListener("click", (e) => {
    if (e.target === gender) {
      genders.forEach((currnetGender) => {
        currnetGender.classList.remove("active-item");
        e.target.classList.add("active-item");
      });
    }
  });
});

// вешаем событие щелчка по кнопки внутри пример функции
resetButton.addEventListener("click", (event) => {
  alert("Reset!");

  event.preventDefault();
});

submitButton.addEventListener("click", (event) => {
  console.log(genders[0].classList.contains("active-item"));

  normalCal.textContent = "999999999999";
  popup.classList.add("visible");
  event.preventDefault();
});

popup.addEventListener("click", (e) => {
  if (e.target.closest("div") !== popup.querySelector(".popup__content")) {
    popup.classList.remove("visible");
    console.log(e.target.closest);
  }
});
