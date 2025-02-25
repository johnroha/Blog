// Toggle Light/Dark Theme
document.getElementById('theme-toggle').addEventListener('click', () => {
  const body = document.body;
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
});

// Newsletter Subscription Form
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const status = document.getElementById('subscription-status');

  if (email.trim() === '') {
    status.textContent = 'Please enter a valid email address.';
    status.style.color = 'red';
    return;
  }

  // Simulate successful subscription
  status.textContent = 'Thank you for subscribing!';
  status.style.color = 'green';

  // Clear the form
  document.getElementById('email').value = '';

  // You can replace this with an actual API call to save the email
  console.log('Email subscribed:', email);
});