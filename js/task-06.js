const inputRef = document.querySelector("input");
const lengthRef = inputRef.getAttribute("data-length");


const onInputBlur = event => {
    event.target.classList.add("invalid");

    if (parseInt(lengthRef) === event.target.value.length) {
        event.target.classList.replace("invalid", "valid");
    }

};
//inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('blur', onInputBlur);

// function  onInputFocus() {
//     console.log();
// }
// function  onInputBlur() {
//     console.log();
// }