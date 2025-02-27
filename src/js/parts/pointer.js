const coursorPointer = () => {
  const courField = document.querySelectorAll('.coursorField');

  courField?.forEach(el => {
    let coursor = el.nextElementSibling;

    coursor = null;

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

  addWindowImg(target);
  windowMove();
};

function addWindowImg(target) {
  const img = target.dataset.img;
  const mainCont = target.closest('.together__cont');
  const winCont = mainCont.querySelector('.together__window');

  if (img) {
    winCont.classList.remove('imgdef');
  } else {
    winCont.classList.add('imgdef');
  }

  if (winCont) {
    const imgPl = winCont.querySelector('img');

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

document.addEventListener('DOMContentLoaded', coursorPointer);
