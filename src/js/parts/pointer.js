const pointer = () => {
  const courField = document.querySelectorAll('.coursorField');

  courField?.forEach(el => {
    let coursor = el.nextElementSibling;

    if (!coursor.classList.contains('coursor')) {
      coursor = null;
    }

    el.addEventListener('mousemove', e => {
      moveCursor(e, coursor);
    });
  });
};

const moveCursor = (e, coursor) => {
  const target = e.currentTarget;
  const viewportOffset = target.getBoundingClientRect();
  const top = viewportOffset.top;
  const left = viewportOffset.left;
  const mouseY = e.clientY - top;
  const mouseX = e.clientX - left;

  if (coursor) {
    coursor.style.top = `${mouseY}px`;
    coursor.style.left = `${mouseX}px`;
  }

  if (target.classList.contains('allcases')) {
    alcasesFunc(target);
    windowMove();
  }
};

function alcasesFunc(target) {
  const img = target.dataset.img;
  const mainCont = target.closest('.together__cont');
  const allCont = mainCont.querySelector('.together__window');

  if (img) {
    allCont.classList.remove('imgdef');
  } else {
    allCont.classList.add('imgdef');
  }

  if (allCont) {
    const imgPl = allCont.querySelector('img');

    imgPl.src = img;
  }
}

function windowMove() {
  const container = document.querySelectorAll('.together__cont');

  container?.forEach(el => {
    const windowElement = el.querySelector('.together__window');

    const containerHeight = el.offsetHeight;
    const windowHeight = windowElement.offsetHeight;

    el.addEventListener('mousemove', event => {
      const containerRect = el.getBoundingClientRect();
      const mouseY = event.clientY - containerRect.top;

      let newTop = mouseY - windowHeight / 2;

      if (newTop < -10) {
        newTop = -10;
      } else if (newTop > containerHeight - windowHeight + 20) {
        newTop = containerHeight - windowHeight + 20;
      }

      windowElement.style.top = `${newTop}px`;
    });
  });
}

pointer();
