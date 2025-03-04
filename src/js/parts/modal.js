import { lockScroll, unlockScroll } from './lockscroll.js';

import { toggleCompletPartForm } from './forms.js';

const activeModals = new Set();
const initializedModals = new WeakSet();

function showModal(modal, modalLead) {
  modal.classList.add('isOpened', 'isAnimation');
  if (modal.querySelector('input[name="lead"]')) {
    modal.querySelector('input[name="lead"]').value = modalLead;
  }
  lockScroll(modal);
  activeModals.add(modal);
}

export function closeModal(modal) {
  modal.classList.remove('isOpened', 'isAnimation');
  activeModals.delete(modal);
  unlockScroll();

  const formId = modal.querySelector('form').id;
  toggleCompletPartForm(formId, false);
}

function initCloseModal(modal) {
  if (initializedModals.has(modal)) return;

  const modalContainer = modal.querySelector('.containerModal');
  const btnsCloseModal = modal.querySelectorAll('.closeModal');

  btnsCloseModal.forEach(btn => {
    btn.addEventListener('click', () => closeModal(modal));
  });

  if (modalContainer) {
    modalContainer.addEventListener('click', event => {
      if (event.target === modalContainer) {
        closeModal(modal);
      }
    });
  }

  initializedModals.add(modal);
}

export function openModal(modalId, modalLead) {
  const modal = document.getElementById(modalId);
  if (modal) {
    activeModals.forEach(activeModal => {
      if (activeModal !== modal) {
        closeModal(activeModal);
      }
    });

    if (!initializedModals.has(modal)) {
      initCloseModal(modal);
    }

    if (!modal.classList.contains('isOpened')) {
      showModal(modal, modalLead);
    }
  }
}

function initOpenModal() {
  const btnsOpenModal = document.querySelectorAll('.openModal');
  btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.id;
      const modalLead = btn.dataset.lead ? btn.dataset.lead : '';
      if (modalId) {
        openModal(modalId, modalLead);
      }
    });
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const lastModal = Array.from(activeModals).pop();
    if (lastModal) closeModal(lastModal);
  }
});

document.addEventListener('DOMContentLoaded', initOpenModal);
