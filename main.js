function init() {
  const burgerButton = document.querySelector("#burger");
  const navmenu = document.querySelector("#menu");
  const differencesList = document.querySelector('#differences-list')

  if (window.innerWidth > 800) {
    differencesList.classList.remove('carousel')
    differencesList.classList.add('slider')
  }

  const carousel = document.querySelector('.carousel');
  const slides = carousel?.querySelectorAll('.carousel__slide');
  const sliders = document.querySelectorAll('.slider');

  let slideCount = 0;

  burgerButton.addEventListener('click', () => {
    navmenu.classList.contains('-hidden') ? navmenu.classList.remove('-hidden') : navmenu.classList.add('-hidden')
  });

  // carousel

  const changeSlide = () => {
    if (!carousel) {
      return;
    }
    if (slideCount >= slides.length) {
      slideCount = 0;
      slides[slides.length-1].classList.add('-hidden')
    }
    if (slideCount > 0) {
      slides[slideCount-1].classList.add('-hidden')
    }
    slides[slideCount].classList.remove('-hidden')
    slideCount++;
  }

  slides?.forEach(slide => {
      if (!slide.classList.contains('-hidden')) {
          slide.classList.add('-hidden')
      }
      changeSlide()
  })

  setInterval(changeSlide, 8000);

  //slider
  for (const slider of sliders) {
    if (!slider) {
      continue;
    }

    slider.increment = 1;
    setInterval(() => {
      const sliderWidth = Math.ceil(slider.offsetWidth + slider.scrollLeft)
      if (sliderWidth >= slider.scrollWidth) {
        slider.increment = -0.5
      } else if (slider.scrollLeft == 0){
        slider.increment = 1
      }
      slider.scrollLeft += slider.increment
    }, 10)
  }

}

init();