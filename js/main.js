

// Variables Setup
const emailInput = document.getElementById('userMail');
const submitBtn = document.getElementById('submitBtn');
const errorMsg = document.querySelector('.error');

// Regular expression for email format validation (email@example.com)

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// form function

submitBtn.addEventListener('click', (e) => {


  e.preventDefault(); // to prevent the button default action

  if (!re.test(emailInput.value) || emailInput.value == '') {

    errorMsg.textContent = 'Please provide a valid email address';
    emailInput.setAttribute('placeholder', 'Email@example.com');
    emailInput.classList.add('active');

  } else if (re.test(emailInput.value)) {
    emailInput.classList.remove('active');
    errorMsg.textContent = '';
  }

  return;
});



