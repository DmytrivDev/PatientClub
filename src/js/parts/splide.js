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
        gap: '1rem',
      },
      760: {
        perPage: 1,
      },
    },
  });
}

const solutionsSplide = document.querySelector('.solutions');
if (solutionsSplide) {
  initSlider(solutionsSplide, {
    perPage: 2,
    gap: '2rem',
    breakpoints: {
      960: {
        gap: '1rem',
      },
      760: {
        perPage: 1,
      },
    },
  });
}

const glandSplide = document.querySelector('.gland');
if (glandSplide) {
  initSlider(glandSplide, {
    gap: '1.5rem',
    perPage: 1,
    breakpoints: {
      960: {
        gap: '1rem',
        perPage: 2,
      },
      760: {
        perPage: 1,
      },
    },
  });
}

const careSplide = document.querySelector('.care');
if (careSplide) {
  initSlider(careSplide, {
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

const teamSplide = document.querySelector('.team');
if (teamSplide) {
  initSlider(teamSplide, {
    perPage: 4,
    gap: '1.5rem',
    breakpoints: {
      960: {
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

const mediaSplide = document.querySelector('.media');
if (mediaSplide) {
  initSlider(mediaSplide, {
    perPage: 1,
    gap: '1.5rem',
  });
}

const partnersSplide = document.querySelector('.partners');
if (partnersSplide) {
  initSlider(partnersSplide, {
    perPage: 1,
    gap: '1.875rem',
  });
}

const betterSplide = document.querySelector('.better');
if (betterSplide) {
  initSlider(betterSplide, {
    perPage: 2,
    gap: '1.5rem',
    breakpoints: {
      960: {
        gap: '1rem',
      },
      760: {
        perPage: 1,
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

const initCertifiedSlider = () => {
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

let prioritySliderInstance;
const priority = document.querySelector('.priority');

const initPrioritySlider = () => {
  if (priority && !prioritySliderInstance) {
    prioritySliderInstance = initSlider(priority, {
      perPage: 2,
      gap: '1rem',
      pagination: true,
      breakpoints: {
        675: {
          perPage: 1,
        },
      },
    });
  }
};

let qualitSliderInstances = [];
const qualit = document.querySelectorAll('.qualit .tabs__cont > div');

const initQualitSlider = () => {
  if (qualit.length && !qualitSliderInstances.length) {
    qualit.forEach(container => {
      const slider = initSlider(container, {
        perPage: 1,
        gap: '1rem',
      });
      qualitSliderInstances.push(slider);
    });
  }
};

const destroySliders = () => {
  if (certifiedSliderInstance) {
    certifiedSliderInstance.destroy();
    certifiedSliderInstance = null;
  }
  if (prioritySliderInstance) {
    prioritySliderInstance.destroy();
    prioritySliderInstance = null;
  }
  if (qualitSliderInstances) {
    qualitSliderInstances.forEach(instance => {
      instance.destroy();
    });
    qualitSliderInstances = [];
  }
};

const checkViewport = () => {
  initCertifiedSlider();
  initPrioritySlider();
  initQualitSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
