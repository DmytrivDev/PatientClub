const steps = document.querySelectorAll('.steps');

function initSteps() {
  steps?.forEach(section => {
    const sectionRect = section.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const partFirst = section.querySelector('.part-first');
    const partSecond = section.querySelector('.part-second');

    const iconsBox1 = section.querySelector('.icons-box span:nth-child(1)');
    const iconsBox2 = section.querySelector('.icons-box span:nth-child(2)');

    if (sectionRect.top <= 0 && windowWidth > 960) {
      const scrollableHeight = sectionRect.height - viewportHeight - 300;
      const scrolledInSection = Math.abs(sectionRect.top);
      const scrollPercent = (scrolledInSection / scrollableHeight) * 100;
      const fixedMaxPercent = Math.max(0, Math.min(scrollPercent, 100));

      // Прямий процент (0 → 100)
      const percentForward = fixedMaxPercent.toFixed(0);
      // Зворотний процент (100 → 0)
      const percentReverse = (100 - fixedMaxPercent).toFixed(0);

      iconsBox1.style.opacity = (percentReverse / 100) * 1;
      iconsBox2.style.opacity = (percentForward / 100) * 1;

      partFirst.style.opacity = (percentReverse / 100) * 1;
      partSecond.style.opacity = (percentForward / 100) * 1;

      partFirst.style.transform = `translateY(-${
        (percentForward / 100) * 100
      }%)`;
      partSecond.style.transform = `translateY(${
        (percentReverse / 100) * 100
      }%)`;
    }
  });
}

document.addEventListener('scroll', initSteps);
document.addEventListener('DOMContentLoaded', initSteps);
