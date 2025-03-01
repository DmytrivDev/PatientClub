import { el } from 'intl-tel-input/i18n';
import { initSlider } from './splidecust';

const specialSplides = document.querySelectorAll('.special');
specialSplides?.forEach(specialSplide => {
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
});

const supportSplides = document.querySelectorAll('.support');
supportSplides?.forEach(supportSplide => {
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
});

const processSplides = document.querySelectorAll('.process');
processSplides?.forEach(processSplide => {
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
});

const reviewsSplides = document.querySelectorAll('.reviews');
reviewsSplides?.forEach(reviewsSplide => {
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
});

const solutionsSplides = document.querySelectorAll('.solutions');
solutionsSplides?.forEach(solutionsSplide => {
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
});

const glandSplides = document.querySelectorAll('.gland');
glandSplides?.forEach(glandSplide => {
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
});

const careSplides = document.querySelectorAll('.care');
careSplides?.forEach(careSplide => {
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
});

const teamSplides = document.querySelectorAll('.team');
teamSplides?.forEach(teamSplide => {
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
});

const mediaSplides = document.querySelectorAll('.media');
mediaSplides?.forEach(mediaSplide => {
  if (mediaSplide) {
    initSlider(mediaSplide, {
      perPage: 1,
      gap: '1.5rem',
    });
  }
});

const partnersSplides = document.querySelectorAll('.partners');
partnersSplides?.forEach(partnersSplide => {
  if (partnersSplide) {
    initSlider(partnersSplide, {
      perPage: 1,
      gap: '1.5rem',
    });
  }
});

const betterSplides = document.querySelectorAll('.better');
betterSplides?.forEach(betterSplide => {
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
});

const hospitalSplides = document.querySelectorAll('.hospital .hospital__card');
hospitalSplides?.forEach(container => {
  initSlider(container, {
    perPage: 1,
    pagination: true,
    breakpoints: {
      960: {},
      500: {},
    },
  });
});

let certifiedSliderInstances = [];
const certified = document.querySelectorAll('.certified');

const initCertifiedSlider = () => {
  if (certified && !certifiedSliderInstances.length) {
    certified.forEach(container => {
      const slider = initSlider(container, {
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
      certifiedSliderInstances.push(slider);
    });
  }
};

let prioritySliderInstances = [];
const priority = document.querySelectorAll('.priority');

const initPrioritySlider = () => {
  if (priority && !prioritySliderInstances.length) {
    priority.forEach(container => {
      const slider = initSlider(container, {
        perPage: 2,
        gap: '1rem',
        pagination: true,
        breakpoints: {
          675: {
            perPage: 1,
          },
        },
      });
      prioritySliderInstances.push(slider);
    });
  }
};

let missionSliderInstances = [];
const mission = document.querySelectorAll('.mission');

const initMissionSlider = () => {
  if (mission && !missionSliderInstances.length) {
    mission.forEach(container => {
      const slider = initSlider(container, {
        perPage: 1,
        gap: '1rem',
        pagination: true,
      });
      missionSliderInstances.push(slider);
    });
  }
};

let qualitSliderInstances = [];
const qualit = document.querySelectorAll('.qualit .tabs__cont > div');

const initQualitSlider = () => {
  if (qualit && !qualitSliderInstances.length) {
    qualit.forEach(container => {
      const slider = initSlider(container, {
        perPage: 1,
        gap: '1rem',
      });
      qualitSliderInstances.push(slider);
    });
  }
};

const contSlides = document.querySelectorAll('.media, .partners, .special');

function adjustSlideWidth() {
  const windowDesc = window.innerWidth > 960;
  const windowTabl = window.innerWidth > 575;

  contSlides.forEach(cont => {
    const splides = cont.querySelectorAll('.splide');

    splides.forEach(splide => {
      const slides = splide.querySelectorAll('.splide__slide');

      slides.forEach(slide => {
        const boxs = slide.querySelectorAll(':scope > div');
        const specialRard = slide.classList.contains('special__card');
        const partnersCard = slide.classList.contains('partners__card');
        const mediaCard = slide.classList.contains('media__card');

        const slideStyles = window.getComputedStyle(slide);
        const boxCount = boxs.length;

        const gap = parseFloat(slideStyles.gap);

        if (specialRard && boxCount <= 2) {
          slide.style.gridTemplateColumns = '1fr';
          if (windowDesc) {
            slide.style.width = `calc((100% - 3 * ${gap}px) / 4)`;
            slide.style.maxWidth = `calc((100% - 3 * ${gap}px) / 4)`;
          } else if (windowTabl) {
            slide.style.width = `calc((100% - ${gap}px) / 2)`;
            slide.style.maxWidth = `calc((100% - ${gap}px) / 2)`;
          } else {
            slide.style.width = '100%';
            slide.style.maxWidth = '100%';
          }
        }

        if (partnersCard && boxCount <= 2) {
          slide.style.gridTemplateColumns = '1fr';
          if (windowDesc) {
            slide.style.width = `calc((100% - 3 * ${gap}px + 28.125rem) / 4)`;
            slide.style.maxWidth = `calc((100% - 3 * ${gap}px + 28.125rem) / 4)`;
          } else if (windowTabl) {
            slide.style.width = `calc((100% - ${gap}px) / 2)`;
            slide.style.maxWidth = `calc((100% - ${gap}px) / 2)`;
          } else {
            slide.style.width = '100%';
            slide.style.maxWidth = '100%';
          }
        }

        if (mediaCard && boxCount % 4 !== 0) {
          if (windowDesc) {
            let totalWidth = 0;
            const maxWidth = `calc((100% - ${gap}px * (${boxCount} - 1)) / ${boxCount})`;

            boxs.forEach(box => {
              totalWidth += box.offsetWidth;
              box.style.maxWidth = maxWidth;
            });

            slide.style.width = `${totalWidth + gap}px`;
            slide.style.maxWidth = `${totalWidth + gap}px`;
          } else {
            boxs.forEach(box => {
              box.style.maxWidth = '';
            });

            slide.style.width = '';
            slide.style.maxWidth = '';
          }
        }
      });
    });
  });
}

const destroySliders = () => {
  if (certifiedSliderInstances) {
    certifiedSliderInstances.forEach(instance => {
      instance.destroy();
    });
    certifiedSliderInstances = [];
  }
  if (prioritySliderInstances) {
    prioritySliderInstances.forEach(instance => {
      instance.destroy();
    });
    prioritySliderInstances = [];
  }
  if (missionSliderInstances) {
    missionSliderInstances.forEach(instance => {
      instance.destroy();
    });
    missionSliderInstances = [];
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
  initMissionSlider();
  initQualitSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', () => {
  checkViewport();
  adjustSlideWidth();
});
document.addEventListener('DOMContentLoaded', () => {
  checkViewport();
  adjustSlideWidth();
});
