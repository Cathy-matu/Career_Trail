// Get the payment plan button
const paymentPlanButton = document.querySelector('.payment_plan button');

// Add a click event listener to the payment plan button
paymentPlanButton.addEventListener('click', () => {
  // Show a modal or redirect the user to a payment page
  showPaymentModal();
});

// Function to show a payment modal
function showPaymentModal() {
  // Create a new modal element
  const modal = document.createElement('div');
  modal.classList.add('payment-modal');

  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('payment-modal-content');

  // Add the modal title
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'Payment Plan';
  modalContent.appendChild(modalTitle);

  // Add the payment plan details
  const paymentPlanDetails = document.createElement('p');
  paymentPlanDetails.textContent = 'Please enter your payment information to enroll in the payment plan.';
  modalContent.appendChild(paymentPlanDetails);

  // Add the payment form
  const paymentForm = document.createElement('form');
  paymentForm.classList.add('payment-form');

  // Add the payment form fields
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Name';
  paymentForm.appendChild(nameInput);

  const cardInput = document.createElement('input');
  cardInput.type = 'text';
  cardInput.placeholder = 'Card Number';
  paymentForm.appendChild(cardInput);

  const expiryInput = document.createElement('input');
  expiryInput.type = 'text';
  expiryInput.placeholder = 'Expiry Date';
  paymentForm.appendChild(expiryInput);

  const cvvInput = document.createElement('input');
  cvvInput.type = 'text';
  cvvInput.placeholder = 'CVV';
  paymentForm.appendChild(cvvInput);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  paymentForm.appendChild(submitButton);

  modalContent.appendChild(paymentForm);

  // Add the close button
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modalContent.appendChild(closeButton);

  // Add the modal content to the modal element
  modal.appendChild(modalContent);

  // Add the modal to the document
  document.body.appendChild(modal);

  // Show the modal
  modal.style.display = 'block';
}
