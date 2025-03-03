import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accord = document.querySelectorAll('.accord');

accord?.forEach(list => {
  new Accordion(list, {
    duration: 400,
    showMultiple: false,
    openOnInit: [0]
  });

  const panels = list.querySelectorAll('.ac-panel');
  panels.forEach(panel => {
    panel.addEventListener('click', event => {
      event.stopPropagation();
    });
  });
});
