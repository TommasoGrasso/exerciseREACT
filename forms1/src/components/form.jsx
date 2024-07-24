
const formElement = document.querySelector('form');
const formData = new FormData(formElement);

formData.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

formData.append('additionalField', 'additionalValue');

fetch('/submit', {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
