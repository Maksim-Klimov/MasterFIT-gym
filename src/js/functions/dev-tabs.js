export const tabsActiveElement = () => {
  const btn = document.querySelectorAll(".gym__item"),
    photo = document.querySelectorAll(".gym__item-photo");

  function removeSlide(activeElement, activeClass) {
    activeElement.forEach((link) => {
      link.classList.remove(activeClass);
    });
  }

  function setNextSlides() {
    btn.forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.nav;

        removeSlide(btn, "gym__item_active");
        removeSlide(photo, "gym__item-photo_active");

        document
          .querySelector(`[data-nav='${id}']`)
          .classList.add("gym__item_active");
        document
          .querySelector(`[data-image='${id}']`)
          .classList.add("gym__item-photo_active");
      });
    });
  }

  setNextSlides();
};
