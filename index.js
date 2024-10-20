const DOMSelectors = {
    
    
  form: document.querySelector(".form"),
  
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
  button: document.querySelector("#getrid"),
  
  

  NameInput: document.getElementById("name-input"),
  DescInput: document.getElementById("Desc-input"),
  ImageInput: document.getElementById("Image-input"),
  ColorInput: document.getElementById("Color-input"),
  };
console.log(DOMSelectors.text);
let id = 0;

function makecard() {
  let name = DOMSelectors.NameInput.value;
  let desc = DOMSelectors.DescInput.value;
  let image = DOMSelectors.ImageInput.value;
  let color = DOMSelectors.ColorInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",

    `
    <div class = "card" id = "${id}">
      <h2 class = "card-header"> ${name} </h2>
      <img class = card-image src="${image}" alt="image made" class = "card-image">
      <p>${desc}</p>
      <button id ="getrid">Remove</button>
    </div>
    
    `
  );
  let cardcolor = document.getElementById(id);
  cardcolor.style.backgroundColor = color;
}

function clearfields(){
  DOMSelectors.NameInput.value = "";
  DOMSelectors.DescInput.value = "";
  DOMSelectors.ImageInput.value = "";
  DOMSelectors.ColorInput.value = "";
}

function eliminate(event){
  
  event.preventDefault();
  document.querySelector(".card").remove();
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
});

DOMSelectors.button.addEventListener("click", function (event){
  event.preventDefault();
  eliminate();
})
