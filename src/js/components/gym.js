// const btn = document.querySelectorAll(".gym__item"),
//   photo = document.querySelectorAll(".gym__item-photo");

function removeSlide(activeElement, activeClass) {
  activeElement.forEach((link) => {
    link.classList.remove(activeClass);
  });
}

function setNextSlides(navCurrent, cartCurrent, activeClassNav, activeClassSlide) {
  const nav = document.querySelectorAll(navCurrent),
  cart = document.querySelectorAll(cartCurrent);

  nav.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.nav;

      removeSlide(nav, activeClassNav);
      removeSlide(cart, activeClassSlide);

      document.querySelector(`[data-nav='${id}']`).classList.add(activeClassNav);
      document.querySelector(`[data-image='${id}']`).classList.add(activeClassSlide);
    });
  });
}

setNextSlides(".gym__item", ".gym__item-photo", "gym__item_active", "gym__item-photo_active");
setNextSlides(".club-cart__item", ".club-cart__window-item", "club-cart__item_active", "club-cart__window-item_active");
