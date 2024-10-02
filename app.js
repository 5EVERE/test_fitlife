'use strict';
///////////////////////////////////////////////////////////////////////
// Плавний прокрут
document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function (e) {
    e.preventDefault();
    document
      .querySelector('#section--1')
      .scrollIntoView({ behavior: 'smooth' });
  });

const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    if (!e.target.classList.contains('nav__link--btn')) {
      const href = e.target.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  }
});
///////////////////////////////////////////////////////////////////////

// Затемнення букв при наведенні
const navLink = document.querySelectorAll('.nav__link');
const navColor = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    navLink.forEach((elem) => {
      if (elem !== e.target) {
        elem.style.opacity = opacity;
      }
    });
    document.querySelector('.nav__logo').style.opacity = opacity;
    document.querySelector('.nav__text').style.opacity = opacity;
  }
};
navLinks.addEventListener('mouseover', function (e) {
  navColor(e, 0.3);
});
navLinks.addEventListener('mouseout', function (e) {
  navColor(e, 1);
});
///////////////////////////////////////////////////////////////////////
// Слайдер
const slide = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
let currentSlide = 0;
const slideLength = slide.length - 1;
const slideElement = function (current) {
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${(i - current) * 100}%)`;
  });
};
slideElement(currentSlide);
const slideRight = function () {
  if (currentSlide === slideLength) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideElement(currentSlide);
};
const slideLeft = function () {
  if (currentSlide === 0) {
    currentSlide = slideLength;
  } else {
    currentSlide--;
  }
  slideElement(currentSlide);
};
btnRight.addEventListener('click', function () {
  slideRight();
});
btnLeft.addEventListener('click', function () {
  slideLeft();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    slideRight();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    slideLeft();
  }
});
