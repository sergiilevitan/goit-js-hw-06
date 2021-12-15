const inputEl = document.querySelector('#font-size-control');
const spanTxt = document.querySelector('#text');
inputEl.addEventListener('input', changeFontSize)

function changeFontSize (event) {
    spanTxt.style.fontSize = event.currentTarget.value + 'px';
}

