const refs = {
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputElChange);

function onInputElChange(event) {
  refs.spanEl.textContent = event.currentTarget.value;
};
