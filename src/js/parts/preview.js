const preview = document.querySelectorAll('.preview');

function initPreview() {
  preview?.forEach(section => {
    const sectionRect = section.getBoundingClientRect();

    const viewportHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const partFirst = section.querySelector('.part-first');
    const partSecond = section.querySelector('.part-second');
    const previewBg = section.querySelector('.preview__body > [class*="__bg"]');

    if (sectionRect.top <= 0) {
      const scrollableHeight = sectionRect.height - viewportHeight;
      const scrolledInSection = Math.abs(sectionRect.top);
      const scrollPercent = (scrolledInSection / scrollableHeight) * 100;
      const fixedMaxPercent = Math.max(0, Math.min(scrollPercent, 100));

      // Прямий процент (0 → 100)
      const percentForward = fixedMaxPercent.toFixed(0);
      // Зворотний процент (100 → 0)
      const percentReverse = (100 - fixedMaxPercent).toFixed(0);

      const percentScale = (1 + (fixedMaxPercent / 100) * 0.3).toFixed(2);

      partFirst.style.transform = `translateY(-${
        (percentForward / 100) * 150
      }px)`;
      partFirst.style.opacity = (percentReverse / 100) * 1;

      partSecond.style.left = `${(percentReverse / 120) * 100}%`;

      previewBg.style.transform = `translateX(-${
        (percentForward / 100) * 300
      }px) scale(${percentScale})`;

      if (windowWidth < 960) {
        partSecond.style.left = `${(percentReverse / 90) * 100}%`;

        previewBg.style.transform = `translateX(0) scale(1)`;
      }
    }
  });
}

document.addEventListener('scroll', initPreview);
document.addEventListener('DOMContentLoaded', initPreview);
