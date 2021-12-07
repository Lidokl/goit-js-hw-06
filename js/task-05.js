// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//     output.textContent = event.currentTarget.value;


// });

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (textInput.value === '') {
        output.textContent = 'Anonymous';
     } else{
        output.textContent = textInput.value;
     }

});







// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");
// const h1El = document.querySelector("h1");

// const onInputChange = event =>
//     inputEl.value === "" ? outputEl.textContent = "Anonymous" : outputEl.textContent = event.target.value;

// inputEl.addEventListener("input", onInputChange);