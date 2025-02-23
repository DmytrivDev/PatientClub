const tabs = document.querySelectorAll('.tabs');

function initTabController() {
  tabs?.forEach(tab => {
    const tabsBox = tab.querySelector('.tabs__box');
    const tabButtons = tab.querySelectorAll('.tabs__btn');
    const tabContents = tab.querySelectorAll('.tabs__cont > div');

    if (!tabsBox || !tabButtons.length || !tabContents.length) return;

    function updateTabUnderline(activeButton) {
      const tabsBoxRect = tabsBox.getBoundingClientRect();
      const activeRect = activeButton.getBoundingClientRect();
      const isSmallScreen = window.innerWidth < 960;

      const offsetLeft =
        activeRect.left - tabsBoxRect.left + tabsBox.scrollLeft;
      const width = activeRect.width;

      tabsBox.style.setProperty('--tab-underline-left', `${offsetLeft}px`);
      tabsBox.style.setProperty('--tab-underline-width', `${width}px`);

      const offset = isSmallScreen ? 0 : 100;

      let scrollAmount = 0;

      if (activeRect.left < tabsBoxRect.left + offset) {
        scrollAmount = activeRect.left - tabsBoxRect.left - offset;
      } else if (activeRect.right > tabsBoxRect.right - offset) {
        scrollAmount = activeRect.right - tabsBoxRect.right + offset;
      }

      if (scrollAmount !== 0) {
        tabsBox.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }

    function handleTabBtns(event) {
      const button = event.currentTarget;
      const therapyId = button.dataset.therapy;
      const targetTab = document.getElementById(therapyId);

      if (!targetTab) return;

      tabButtons.forEach(btn => btn.classList.remove('isActive'));
      button.classList.add('isActive');

      tabContents.forEach(content =>
        content.classList.remove('isActive', 'isAnim')
      );

      targetTab.classList.add('isActive');
      setTimeout(() => {
        targetTab.classList.add('isAnim');
      }, 100);

      updateTabUnderline(button);
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabBtns);
    });

    function handleResize() {
      const activeButton = tab.querySelector('.tabs__btn.isActive');
      if (activeButton) {
        updateTabUnderline(activeButton);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
  });
}

document.addEventListener('DOMContentLoaded', initTabController);
