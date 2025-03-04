import axios from 'axios';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

import { openModal } from './modal.js';

export function toggleCompletPartForm(form, state) {
  const formId = document.getElementById(form);
  const modalWrapp = formId.closest('.modal__wrapp');
  if (!modalWrapp) return;
  modalWrapp.classList.toggle('isComplet', state);
}

const forms = document.querySelectorAll('.submitForm');

forms?.forEach(form => {
  form.addEventListener('submit', submitForm);
});

async function sendForm(form) {
  const ajaxurl = '/wp-admin/admin-ajax.php';
  const myFormData = new FormData(form);

  try {
    const response = await axios.post(ajaxurl, myFormData);

    if (response.data !== 'error') {
      formEnd(form, true);
    } else {
      formEnd(form, false);
    }
  } catch (error) {
    formEnd(form, false);
    console.error('Error:', error);
  }
}

function formEnd(form, status) {
  if (status) {
    if (form.id === 'commentForm') {
      toggleCompletPartForm(form.id, true);
    }

    if (form.id === 'connectForm') {
      // getPhoneNumber();

      setTimeout(() => {
        openModal('idDone');
      }, 300);
    }

    if (form.id === 'callbackForm') {
      // getPhoneNumber();

      setTimeout(() => {
        toggleCompletPartForm(form.id, true);
      }, 300);
    }
  } else {
    setTimeout(() => {
      openModal('idError');
    }, 300);
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

  function getPhoneNumber() {
    const phoneInput = e.target.querySelector('input[type="tel"]');
    const phoneInput2 = e.target.querySelector('input[name="phone"]');
    if (phoneInput && iti && phoneInput2) {
      phoneInput2.value = iti.getNumber();
    }
  }

  if (!errors) {
    setTimeout(() => {
      e.target.reset();
    }, 1000);

    if (e.target.id === 'connectForm' || e.target.id === 'callbackForm') {
      getPhoneNumber();
    }
    
    sendForm(e.target);
  }
}

function checkFields(field, type, val) {
  let errors = false;

  if (type === 'text') {
    if (isEmpty(val)) {
      field.closest('.label__def').classList.add('isRequire');
      errors = true;
    }
  }

  if (type === 'email') {
    if (isEmpty(val) || !isEmail(val)) {
      field.closest('.label__def').classList.add('isRequire');
      errors = true;
    }
  }

  if (type === 'tel') {
    if (isEmpty(val) || !iti.isValidNumber()) {
      field.closest('.label__def').classList.add('isRequire');
      errors = true;
    }
  }

  if (type === 'checkbox') {
    if (!field.checked) {
      field.closest('.checkbox__def').classList.add('isRequire');
      errors = true;
    }
  }

  if (field.tagName === 'SELECT') {
    if (!field.value || field.value === '') {
      field.closest('.label__def').classList.add('isRequire');
      errors = true;
    }
  }

  return errors;
}

function removeErrors(field) {
  if (field) {
    const label = field.closest('.label__def, .checkbox__def');
    if (label && label.classList.contains('isRequire')) {
      label.classList.remove('isRequire');
    }
  } else {
    document
      .querySelectorAll('.isRequire')
      .forEach(el => el.classList.remove('isRequire'));
  }
}

const phoneInputs = document.querySelectorAll('input[type="tel"]');

let iti;
phoneInputs?.forEach(input => {
  const wrapper = input.closest('.phone-wrapp');
  if (!wrapper) return;

  iti = intlTelInput(input, {
    strictMode: true,
    initialCountry: 'ua',
    // geoIpLookup: (success, failure) => {
    //   fetch('https://ipapi.co/json')
    //     .then(res => res.json())
    //     .then(data => success(data.country_code))
    //     .catch(() => failure());
    // },
    loadUtils: () => import('intl-tel-input/build/js/utils.js'),
    dropdownContainer: wrapper,
    separateDialCode: true,
  });
});
