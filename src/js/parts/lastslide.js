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
            const maxWidthBox = `calc((100% - ${gap}px * (${boxCount} - 1)) / ${boxCount})`;
            const defWidthBox = (splide.offsetWidth - gap * 3) / 4;
            const maxWidthSlide = defWidthBox * boxCount + gap * (boxCount - 1);

            boxs.forEach(box => {
              box.style.maxWidth = maxWidthBox;
            });

            slide.style.width = `${maxWidthSlide}px`;
            slide.style.maxWidth = `${maxWidthSlide}px`;
          } else if (windowTabl) {
            slide.style.gridTemplateColumns = '';
            boxs.forEach(box => {
              box.style.maxWidth = '100%';
            });
            slide.style.width = `calc(100% - ${gap}px)`;
            slide.style.maxWidth = `calc(100% - ${gap}px)`;

            if (boxCount <= 2) {
              slide.style.gridTemplateColumns = '1fr';
              slide.style.width = `calc((100% - ${gap}px) / 2)`;
              slide.style.maxWidth = `calc((100% - ${gap}px) / 2)`;
            }
          } else {
            slide.style.gridTemplateColumns = '';
            boxs.forEach(box => {
              box.style.maxWidth = '100%';
            });

            slide.style.width = '100%';
            slide.style.maxWidth = '100%';
          }
        }
      });
    });
  });
}

window.addEventListener('resize', adjustSlideWidth);
document.addEventListener('DOMContentLoaded', adjustSlideWidth);
