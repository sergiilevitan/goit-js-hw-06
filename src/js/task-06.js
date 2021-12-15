const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(this.dataset.length)) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
    else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
};