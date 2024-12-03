document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".video-card");
  const existingButtons = document.querySelector(".button-container");
  const videoCardsContainer = document.querySelector(".video-cards");
  let currentSlide = 0;

  // Приховуємо існуючий button-container
  if (existingButtons) existingButtons.style.display = "none";

  // Створюємо новий button-container
  const newButtonContainer = document.createElement("div");
  newButtonContainer.classList.add("slider-buttons");

  // Створюємо кнопки
  const prevButton = document.createElement("button");
  prevButton.classList.add("circle-button", "left");
  prevButton.textContent = "❮";

  const nextButton = document.createElement("button");
  nextButton.classList.add("circle-button", "right");
  nextButton.textContent = "❯";

  // Додаємо кнопки до нового контейнера
  newButtonContainer.appendChild(prevButton);
  newButtonContainer.appendChild(nextButton);

  // Додаємо новий button-container під слайдами
  videoCardsContainer.parentElement.appendChild(newButtonContainer);

  // Функція для оновлення видимості слайдів
  const updateSlides = () => {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = "flex"; // Показати активний слайд
      } else {
        slide.style.display = "none"; // Приховати неактивні слайди
      }
    });

    // Оновлення стану кнопок
    prevButton.classList.toggle("active", currentSlide > 0);
    nextButton.classList.toggle("active", currentSlide < slides.length - 1);
  };

  // Події для кнопок
  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    }
  });

  // Ініціалізація слайдера
  updateSlides();
});
