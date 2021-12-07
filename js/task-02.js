const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listTitle = document.querySelector("ul");
//const liEl = dodocument.createElement('.li');
const listNew = ingredients.map((element) => {
  const createItem = document.createElement("li");
  const addTextContent = (createItem.textContent = element);
  const addClass = createItem.classList.add("item");
  return createItem;
});
//console.log(listNew);
listTitle.append(...listNew);