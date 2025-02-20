// import axios from 'axios';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

import IMask from 'imask';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

import { openModal } from './modal.js';

export function toggleCompletPartForm(state) {
  const commentWrapp = document.querySelector('.comment__wrapp');
  if (!commentWrapp) return;
  commentWrapp.classList.toggle('isComplet', state);
}

const forms = document.querySelectorAll('.submitForm');

forms?.forEach(form => {
  form.addEventListener('submit', submitForm);
});

// async function sendForm(form) {
//   const ajaxurl = '/wp-admin/admin-ajax.php';
//   const headers = { 'Content-Type': 'multipart/form-data' };
//   const myFormData = new FormData(form);
//   const params = Object.fromEntries(myFormData.entries());

//   try {
//     const responce = await axios.get(ajaxurl, { params }, { headers });
//     console.log(responce.data);
//     if (responce.data !== 'error') {
//       formEnd(form, true);
//     } else {
//       formEnd(form, false);
//     }
//   } catch (error) {
//     formEnd(form, false);
//   }
// }

function formEnd(form, status) {
  if (status) {
    const successUrl = form.data.success;

    window.location.href = successUrl;
  } else {
    alert('Форма не відправлена. Спробуйте ще раз');
  }
}

function submitForm(e) {
  e.preventDefault();

  removeErrors();

  const fileds = e.target.elements;
  let errors = 0;

  Array.from(fileds).forEach(field => {
    const isReq = field.dataset.required;

    if (isReq) {
      const type = field.type;
      const val = field.value;

      if (checkFields(field, type, val)) {
        errors += 1;

        field.addEventListener('change', () => removeErrors(field));

        if (type === 'text' || type === 'email' || type === 'tel') {
          field.addEventListener('input', () => {
            if (!checkFields(field, type, field.value)) {
              removeErrors(field);
            }
          });
        }
      }
    }
  });

  if (!errors) {
    setTimeout(() => {
      e.target.reset();
    }, 300);

    if (e.target.id === 'commentForm') {
      toggleCompletPartForm(true);
    }

    if (e.target.id === 'doneForm') {
      openModal('idDone');
    }

    // sendForm(e.target);
  }
}

function checkFields(field, type, val) {
  let errors = false;

  if (type === 'text') {
    if (isEmpty(val)) {
      field.closest('label').classList.add('isRequire');
      errors = true;
    }
  }

  if (type === 'email') {
    if (isEmpty(val) || !isEmail(val)) {
      field.closest('label').classList.add('isRequire');
      errors = true;
    }
  }

  if (type === 'tel') {
    if (isEmpty(val) || !isMaskFilledTel(field)) {
      field.closest('label').classList.add('isRequire');
      errors = true;
    }
  }

  if (type === 'checkbox') {
    if (!field.checked) {
      field.closest('label').classList.add('isRequire');
      errors = true;
    }
  }

  if (field.tagName === 'SELECT') {
    if (!field.value || field.value === '') {
      field.closest('label').classList.add('isRequire');
      errors = true;
    }
  }

  return errors;
}

function removeErrors(field) {
  if (field) {
    const label = field.closest('label');
    if (label && label.classList.contains('isRequire')) {
      label.classList.remove('isRequire');
    }
  } else {
    document
      .querySelectorAll('.isRequire')
      .forEach(el => el.classList.remove('isRequire'));
  }
}

const maskOptionsTel = {
  mask: '+{38} (000) 000 00 00',
};

function isMaskFilledTel(field) {
  const phoneMask = IMask(field, maskOptionsTel);

  return phoneMask.masked.isComplete;
}

const phoneInput = document.querySelectorAll('input[type="tel"]');

phoneInput?.forEach(input => {
  if (input) {
    const iti = intlTelInput(input, {
      initialCountry: 'auto', // Визначення країни за IP
      geoIpLookup: callback => {
        fetch('https://ipapi.co/json') // Або інший API для отримання країни
          .then(res => res.json())
          .then(data => callback(data.country_code))
          .catch(() => callback('UA')); // За замовчуванням Україна
      },
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/20.1.5/js/utils.js', // Додатковий скрипт для форматування
    });

    // Отримання номера у міжнародному форматі перед відправкою форми
    input.addEventListener('blur', () => {
      console.log('Форматований номер:', iti.getNumber());
    });
  }
});
