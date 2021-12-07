const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputRef.value}px`;

const inputChangeHandler = event => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
};

inputRef.addEventListener("input", inputChangeHandler);