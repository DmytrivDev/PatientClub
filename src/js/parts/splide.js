import { initSlider } from './splidecust';

const specialSplide = document.querySelector('.special');
if (specialSplide) {
  initSlider(specialSplide, {
    perPage: 2,
    gap: '1.5rem',
    breakpoints: {
      960: {
        perPage: 1,
        gap: '0.75rem',
      },
    },
  });
}

const supportSplide = document.querySelector('.support');
if (supportSplide) {
  initSlider(supportSplide, {
    perPage: 4,
    gap: '1.5rem',
    breakpoints: {
      960: {
        perPage: 2,
        gap: '0.75rem',
      },
      575: {
        perPage: 1,
      },
    },
  });
}

const processSplide = document.querySelector('.process');
if (processSplide) {
  initSlider(processSplide, {
    perPage: 4,
    gap: '1.5rem',
    breakpoints: {
      960: {
        pagination: true,
        perPage: 3,
        gap: '1rem',
      },
      875: {
        perPage: 2,
      },
      575: {
        perPage: 1,
      },
    },
  });
}

const reviewsSplide = document.querySelector('.reviews');
if (reviewsSplide) {
  initSlider(reviewsSplide, {
    perPage: 2,
    gap: '1.5rem',
    breakpoints: {
      960: {
        perPage: 1,
        gap: '1rem',
      },
    },
  });
}

// const elemSplides = document.querySelectorAll('.elem');
// elemSplides?.forEach(container => {
//   initSlider(container, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       500: {},
//     },
//   });
// });

let certifiedSliderInstance;
const certified = document.querySelector('.certified');

const initElemSlider = () => {
  if (certified && !certifiedSliderInstance) {
    certifiedSliderInstance = initSlider(certified, {
      perPage: 6,
      gap: '2.5rem',
      breakpoints: {
        875: {
          perPage: 5,
        },
        675: {
          perPage: 4,
        },
        575: {
          perPage: 3,
        },
      },
    });
  }
};

const destroySliders = () => {
  if (certifiedSliderInstance) {
    certifiedSliderInstance.destroy();
    certifiedSliderInstance = null;
  }
};

const checkViewport = () => {
  initElemSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
