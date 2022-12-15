'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach((el) => el.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page Navigation
// Button Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' })
});
// Event delegation
// 1. add event listener to common parent element
// 2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // matching strategy
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//tabs.forEach(t => t.addEventListener('click', () => console.log('tab'))) // don't do this for performance sake
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  if (!clicked) return;
  // Remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  // Activate tab
  clicked.classList.add('operations__tab--active')
  // Active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
});
///////END TAB COMPONENT////////////

// Menu Fade Animation
const nav = document.querySelector('.nav')

const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) { // using classlist contains instead of closest because there are no child elems that we can accidently click (such as the span elem that contained the numbers)
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this; // leave mouse over at opacity 1, change the opacity of the siblings to 0.5
    });
    logo.style.opacity = this; // change opacity of logo to 0.5
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
//// Menu Fade Animation

// Sticky Navigation
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2] // 0 -> when the target comes into view / out of view
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)
const heading = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky'); // when the target is not intersecting, make sticky
  else nav.classList.remove('sticky')
};
const headingObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px` // set our own margin for the sticky to appear at based on px
});
headingObserver.observe(heading);
//// Sticky Navigation END

// Reveal Section
const allSections = document.querySelectorAll('.section')
const revealSect = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObs = new IntersectionObserver(revealSect, {
  root: null,
  threshold: .15,
});
allSections.forEach(function (section) {
  sectionObs.observe(section);
  section.classList.add('section--hidden');
})
//// Reveal Section END
const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.section')
const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);
document.getElementById('section--1');
// console.log(document.getElementsByClassName('btn'));

// Lazy img loading
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img'); // remove the blur filter after load.
  })
  observer.unobserve(entry.target)
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null, // set root to the entire viewport
  threshold: 0,
  rootMargin: '100px'
});

imgTargets.forEach(img => imgObserver.observe(img))
//// Lazy img loading END

const slider = function () {
  // Slider Component
  const slides = document.querySelectorAll('.slide');
  const dotContainer = document.querySelector('.dots');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let currentSlide = 0;
  const maxSlide = slides.length;

  // create dots
  //
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    })
  };

  const activeDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  };
  // center slide based on index
  const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  };
  // percent for each slide 0%, 100%, 200%, 300%

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++
    };
    // percent for each slide -100%, 0%, 100%, 200%
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide)
  };
  const init = function () {
    createDots();
    activeDot(0);
    goToSlide(0);
  };

  init()
  // Go to next slide
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset; // destructure each dot based on slide i number
      goToSlide(slide); // call this function and go to the slide based on the dot index
      activeDot(slide);
    };
  });
  //// Slider Component END
}

slider();


// create and insert elements
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> GOT IT! </button>'
// header.prepend(message)
header.append(message)
// header.append(message.clondeNode(true));

// header.before(message);
// header.after(message)

// Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
})

//Styles
message.style.backgroundColor = '#37383d';

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('Hi');
//   this.style.backgroundColor = randomColor()
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('Hi');
//   this.style.backgroundColor = randomColor()

// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('Hi');
//   this.style.backgroundColor = randomColor()

// });

const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('h1').style.background = 'var(--gradient-primary)';

//going sideways
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)'
//   }
// })

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built');
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

