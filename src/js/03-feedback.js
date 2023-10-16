import {save, load} from "./storage.js"
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';


function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formState));
}

function loadFormState() {
  const savedState = localStorage.getItem(storageKey);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
}

form.addEventListener('input', throttle(saveFormState, 500));

loadFormState();

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formState);
  
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = ''
});

