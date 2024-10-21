const DOMSelectors = {
  form: document.querySelector(".form"),

  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
  delete: document.querySelector(".getrid"),
  text: document.getElementById("txt"),

  NameInput: document.getElementById("name-input"),
  DescInput: document.getElementById("Desc-input"),
  ImageInput: document.getElementById("Image-input"),
  ColorInput: document.getElementById("Color-input"),
};
console.log(DOMSelectors.text);
let id = 0;
let buttonid = 0;

function makecard() {
  let name = DOMSelectors.NameInput.value;
  let desc = DOMSelectors.DescInput.value;
  let image = DOMSelectors.ImageInput.value;
  let color = DOMSelectors.ColorInput.value;
  id += 1;
  buttonid += 1;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",

    `
    <div class = "card" id = "card-${id}" style = "background-color: ${color};">
      <h2 class = "card-header"> ${name} </h2>
      <img class = card-image src="${image}" alt="image made" class = "card-image">
      <p>${desc}</p>
      <button class = "getrid" id = "bt-${buttonid}">Return to Ball <img class = "ball" src="images/ball.png" alt="ball"></button>
    </div>

    
    `
  );

  //let cardcolor = document.getElementById(`#${id}`);
  //cardcolor.style.backgroundColor = color;
}

function clearfields() {
  DOMSelectors.NameInput.value = "";
  DOMSelectors.DescInput.value = "";
  DOMSelectors.ImageInput.value = "";
  DOMSelectors.ColorInput.value = "";
}

function eliminate(number, button) {
  let bruh = document.getElementById(`bt-${button}`);
  bruh.addEventListener("click", function () {
    let crook = document.getElementById(`card-${number}`);
    crook.remove();
  });
}

/*DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});*/
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  //console.log(document.querySelector("input").value);
  makecard();
  clearfields();
  eliminate(id, buttonid);
});

// DOMSelectors.delete.addEventListener("click", function (event){
//   event.preventDefault();
//   eliminate();

// })
